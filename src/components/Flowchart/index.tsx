import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

interface Node {
  id: number;
  name: string;
  completed: boolean;
}

// interface Link {
//   source: string;
//   target: string;
// }

interface FlowchartProps {
  data: Node[];
}

const Flowchart: React.FC<FlowchartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!data || data.length === 0 || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 0, bottom: 30, left: 0 };

    const svgWidth = 600;

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Draw rectangles for each workflow step
    const rects = g
      .selectAll<SVGRectElement, Node>('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('rx', 10) // Set corner radius
      .attr('ry', 10)
      .attr('fill', (d) => (d.completed ? 'green' : 'gray'));

    rects.each(function (d, i) {
      const text = d3
        .select(this.parentNode)
        .append('text')
        .attr('text-anchor', 'middle') // 文本水平居中对齐
        .attr('dominant-baseline', 'central') // 文本垂直居中对齐
        .text(d.name);

      const textWidth = text.node().getBBox().width;

      const rectWidth = textWidth + 20; // 添加一些额外的宽度以留出空白
      const rectHeight = 50;
      const rectX = (svgWidth - textWidth) / 2;
      const rectY = i * 120;

      // 设置矩形的宽度、高度和位置
      d3.select(this)
        .attr('width', rectWidth)
        .attr('height', rectHeight)
        .attr('x', rectX)
        .attr('y', rectY);

      // 设置文本的位置
      d3.select(this.parentNode)
        .append('text')
        .attr('x', rectX + 10) // 文本水平居中
        .attr('y', rectY + rectHeight / 2) // 文本垂直居中
        .attr('dy', '0.35em') // 垂直偏移量，用于微调文本位置
        .text(d.name)
        .attr('fill', 'white');

      text.style('display', 'none');

      // 添加指向下一个矩形的指针
      // if (i < data.length - 1) {
      //   const nextRect = g.select<SVGRectElement>('rect:nth-child(' + (i + 2) + ')');
      //   const nextRectY = parseFloat(nextRect.attr('y'));
      //   const pointerY = rectY + rectHeight;
      //   const pointerX = rectX + rectWidth / 2;

      //   g.append('line')
      //     .attr('x1', pointerX)
      //     .attr('y1', pointerY)
      //     .attr('x2', pointerX)
      //     .attr('y2', nextRectY)
      //     .attr('stroke', 'black')
      //     .attr('stroke-width', 2)
      //     .attr('marker-end', 'url(#arrow)'); // 添加箭头标记
      // }
    });
  }, [data, innerWidth, innerHeight]);

  return (
    <svg ref={svgRef} width={600} height={800}>
      {/* SVG content will be rendered here */}
    </svg>
  );
};

export default Flowchart;
