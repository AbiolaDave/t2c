"use client";

import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

const data = [
  { date: "08 Jan", value: 2160 },
  { date: "09 Jan", value: 2170 },
  { date: "10 Jan", value: 2175 },
  { date: "11 Jan", value: 2180 },
  { date: "12 Jan", value: 2182 },
  { date: "13 Jan", value: 2184 },
  { date: "14 Jan", value: 2192 },
  { date: "15 Jan", value: 2200 },
  { date: "16 Jan", value: 2200 },
  { date: "17 Jan", value: 2200 },
  { date: "18 Jan", value: 2200 },
  { date: "19 Jan", value: 2204 },
  { date: "20 Jan", value: 2201 },
  { date: "21 Jan", value: 2208 },
  { date: "22 Jan", value: 2208 },
  { date: "23 Jan", value: 2216 },
  { date: "24 Jan", value: 2220 },
  { date: "25 Jan", value: 2225 },
  { date: "26 Jan", value: 2223 },
  { date: "27 Jan", value: 2226 },
  { date: "28 Jan", value: 2221 },
  { date: "29 Jan", value: 2220 },
  { date: "30 Jan", value: 2210 },
];

const MARGIN = { top: 0, right: 16, bottom: 36, left: 48 };
const PX_PER_POINT = 52;
const TICK_COUNT = 5;
const GREEN = "#3CAE8C";

export default function RateChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const yAxisRef = useRef<SVGSVGElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [atStart, setAtStart] = useState(false);
  const [atEnd, setAtEnd] = useState(true);
  const [height, setHeight] = useState(0);

  // Track container height
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setHeight(el.clientHeight));
    ro.observe(el);
    setHeight(el.clientHeight);
    return () => ro.disconnect();
  }, []);

  // Scroll to right on mount
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = el.scrollWidth;

    const onScroll = () => {
      setAtStart(el.scrollLeft <= 2);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Draw chart whenever height changes
  useEffect(() => {
    if (!height || !svgRef.current || !yAxisRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // NEW: draw fixed Y-axis labels in a separate SVG
    const yAxisSvg = d3.select(yAxisRef.current);
    yAxisSvg.selectAll("*").remove();

    const innerW = data.length * PX_PER_POINT;
    const innerH = height - MARGIN.top - MARGIN.bottom;
    const totalW = innerW + MARGIN.left + MARGIN.right;

    svg.attr("width", totalW).attr("height", height);

    // NEW: size the fixed Y-axis SVG to match just the left margin
    yAxisSvg.attr("width", MARGIN.left).attr("height", height);
    const minVal = d3.min(data, (d) => d.value)!;
    const maxVal = d3.max(data, (d) => d.value)!;
    const yScale = d3
      .scaleLinear()
      .domain([minVal - 2, maxVal + 2])
      .range([innerH, 0]);

    const xScale = d3
      .scalePoint()
      .domain(data.map((d) => d.date))
      .range([0, innerW])
      .padding(0.5);

    const g = svg
      .append("g")
      .attr("transform", `translate(${MARGIN.left},${MARGIN.top})`);

    // Gradient def
    const defs = svg.append("defs");
    const grad = defs
      .append("linearGradient")
      .attr("id", "areaGrad")
      .attr("x1", "0")
      .attr("y1", "0")
      .attr("x2", "0")
      .attr("y2", "1");
    grad
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", GREEN)
      .attr("stop-opacity", 0.18);
    grad
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", GREEN)
      .attr("stop-opacity", 0.01);

    // Y gridlines (still inside scrollable SVG)
    const yTicks = yScale.ticks(TICK_COUNT);
    g.selectAll(".grid-line")
      .data(yTicks)
      .enter()
      .append("line")
      .attr("class", "grid-line")
      .attr("x1", 0)
      .attr("x2", innerW)
      .attr("y1", (d) => yScale(d))
      .attr("y2", (d) => yScale(d))
      .attr("stroke", "#e2e8f0")
      .attr("stroke-width", 1);

    // NEW: Y-axis labels drawn in the fixed overlay SVG instead
    const yAxisG = yAxisSvg
      .append("g")
      .attr("transform", `translate(0,${MARGIN.top})`);

    yAxisG
      .selectAll(".y-label")
      .data(yTicks)
      .enter()
      .append("text")
      .attr("class", "y-label")
      .attr("x", MARGIN.left - 8)
      .attr("y", (d) => yScale(d))
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .attr("fill", "#94a3b8")
      .attr("font-size", 10)
      .text((d) => `₦${d.toLocaleString()}`);

    // Area

    const areaGen = d3
      .area<(typeof data)[0]>()
      .x((d) => xScale(d.date)!)
      .y0(innerH)
      .y1((d) => yScale(d.value))
      .curve(d3.curveCatmullRom.alpha(0.5));

    g.append("path")
      .datum(data)
      .attr("fill", "url(#areaGrad)")
      .attr("d", areaGen);

    // Line
    const lineGen = d3
      .line<(typeof data)[0]>()
      .x((d) => xScale(d.date)!)
      .y((d) => yScale(d.value))
      .curve(d3.curveCatmullRom.alpha(0.5));

    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", GREEN)
      .attr("stroke-width", 2)
      .attr("d", lineGen);

    // X axis labels
    g.selectAll(".x-label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "x-label")
      .attr("x", (d) => xScale(d.date)!)
      .attr("y", innerH + 20)
      .attr("text-anchor", "middle")
      .attr("fill", "#94a3b8")
      .attr("font-size", 10)
      .text((d) => d.date);

    // Tooltip overlay
    const tooltip = d3.select(tooltipRef.current);

    // Vertical hover line
    const hoverLine = g
      .append("line")
      .attr("class", "hover-line")
      .attr("y1", 0)
      .attr("y2", innerH)
      .attr("stroke", GREEN)
      .attr("stroke-width", 1)
      .attr("stroke-dasharray", "4 3")
      .attr("stroke-opacity", 0.5)
      .style("display", "none");

    // Hover dot
    const hoverDot = g.append("g").style("display", "none");
    hoverDot
      .append("circle")
      .attr("r", 7)
      .attr("fill", "rgba(60,174,140,0.15)");
    hoverDot
      .append("circle")
      .attr("r", 3.5)
      .attr("fill", GREEN)
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5);

    // Invisible overlay for mouse events
    g.append("rect")
      .attr("width", innerW)
      .attr("height", innerH)
      .attr("fill", "transparent")
      .on("mousemove", function (event) {
        const [mx] = d3.pointer(event);
        const points = data.map((d) => ({ d, x: xScale(d.date)! }));
        const nearest = points.reduce((prev, curr) =>
          Math.abs(curr.x - mx) < Math.abs(prev.x - mx) ? curr : prev,
        );

        const x = nearest.x;
        const y = yScale(nearest.d.value);

        hoverLine.attr("x1", x).attr("x2", x).style("display", null);
        hoverDot
          .attr("transform", `translate(${x},${y})`)
          .style("display", null);

        const scrollEl = scrollRef.current!;
        const svgRect = svgRef.current!.getBoundingClientRect();
        const scrollRect = scrollEl.getBoundingClientRect();

        const tipX = svgRect.left - scrollRect.left + MARGIN.left + x;
        const tipY = MARGIN.top + y - 48;

        tooltip
          .style("display", "block")
          .style("left", `${tipX}px`)
          .style("top", `${tipY}px`)
          .html(
            `<p style="font-size:11px;color:#94a3b8;margin-bottom:2px">${nearest.d.date}</p>
             <p style="font-size:14px;font-weight:600;color:white">₦${nearest.d.value.toLocaleString()}</p>`,
          );
      })
      .on("mouseleave", () => {
        hoverLine.style("display", "none");
        hoverDot.style("display", "none");
        tooltip.style("display", "none");
      });
  }, [height]);

  return (
    <>
      <style>{`
        .rate-scroll { overflow-x: scroll; scrollbar-width: thin; scrollbar-color: #cbd5e1 #f1f5f9; }
        .rate-scroll::-webkit-scrollbar { height: 4px; display: block; }
        .rate-scroll::-webkit-scrollbar-track { background: #f1f5f9; border-radius: 9999px; }
        .rate-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 9999px; }
        .rate-scroll::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>

      <div ref={containerRef} className="relative h-full w-full">
        {/* Fade edge — right side only now (left is covered by fixed axis) */}
        {!atEnd && (
          <div
            className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8"
            style={{
              background: "linear-gradient(to left, white, transparent)",
            }}
          />
        )}

        {/* Tooltip */}
        <div
          ref={tooltipRef}
          className="pointer-events-none absolute z-20 hidden rounded-lg border border-white/10 bg-[#0f172a] px-3 py-2 shadow-lg"
        />

        {/* Scrollable chart area */}
        <div
          ref={scrollRef}
          className="rate-scroll absolute inset-0 overflow-x-scroll overflow-y-hidden"
          style={{ paddingLeft: 0, maxWidth: "100%" }}
        >
          <svg ref={svgRef} style={{ display: "block" }} />
        </div>

        {/* NEW: Fixed Y-axis overlay — sits on top of the left margin, never scrolls */}
        <svg
          ref={yAxisRef}
          className="pointer-events-none absolute left-0 top-0 z-10"
          style={{ background: "white" }}
        />
      </div>
    </>
  );
}
