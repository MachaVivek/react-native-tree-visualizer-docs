interface PropConfig {
    name: string;
    type: "string" | "number" | "boolean" | "select" | "color";
    options?: string[]; // for select
    defaultValue: any;
}

const propsConfig: PropConfig[] = [
    { name: "showControls", type: "boolean", defaultValue: true },
    { name: "nodeLength", type: "number", defaultValue: 100 },
    { name: "levelGap", type: "number", defaultValue: 50 },
    { name: "nodeShape", type: "select", options: ["circle", "square", "hexagon"], defaultValue: "hexagon" },
    { name: "nodeStrokeWidth", type: "number", defaultValue: 2 },
    { name: "isCurvedPath", type: "boolean", defaultValue: true },
    { name: "pathStrokeWidth", type: "number", defaultValue: 2 },
    { name: "orientation", type: "select", options: ["Portrait", "Landscape"], defaultValue: "Portrait" },
    { name: "modalAnimationType", type: "select", options: ["fade", "slide", "dotZoom"], defaultValue: "fade" },
    { name: "pathStrokeColor", type: "color", defaultValue: "#FFFFFF" },
    { name: "nodeStrokeColor", type: "color", defaultValue: "#FFFFFF" },
    { name: "textColor", type: "color", defaultValue: "white" },
    { name: "backgroundColor", type: "color", defaultValue: "black" },
    { name: "buttonBackgroundColor", type: "color", defaultValue: "white" },
    { name: "buttonTextColor", type: "color", defaultValue: "black" },
    { name: "modelOverlayColor", type: "color", defaultValue: "rgba(0,0,0,0.5)" }
];


import { useState, useEffect } from "react";
import CopyableCommand from "./CopyCode";

const InteractiveSampleCode = () => {
    const initialProps: Record<string, any> = {};
    propsConfig.forEach((p) => (initialProps[p.name] = p.defaultValue));

    const [props, setProps] = useState(initialProps);
    const [sampleCode, setSampleCode] = useState("");

    useEffect(() => {
        const propsString = Object.entries(props)
            .map(([key, value]) => {
                if (typeof value === "string") return `${key}="${value}"`;
                if (typeof value === "boolean") return `${key}={${value}}`;
                return `${key}={${value}}`;
            })
            .join("\n        ");

        setSampleCode(`import { useState } from 'react';
import { View } from 'react-native';
import { TreeNode, TreeVisualizer } from 'react-native-tree-visualizer';

const index = () => {

  // Each node can contain any number of fields of any type
  type PersonNode = { name: string; relation: string };
  const simpleTree: TreeNode<PersonNode> = {
    id: "1",
    name: "venkatesh",
    relation: "Father",
    children: [
      {
        id: "2",
        name: "mamatha",
        relation: "Mother",
        children: [
          { id: "4", name: "vivek", relation: "Son", children: [] },
          { id: "5", name: "vyshnavi", relation: "Daughter", children: [] },
        ]
      },
      {
        id: "3",
        name: "Ram",
        relation: "Uncle",
        children: [
          { id: "6", name: "Lav", relation: "Cousin", children: [] },
          { id: "7", name: "Kush", relation: "Cousin", children: [] },
        ]
      }
    ]
  };

  const [tree, setTree] = useState(simpleTree)
  return (
    <View style={{ flex: 1, backgroundColor: "${props.backgroundColor}" }}>
      <TreeVisualizer
        tree={tree}
        setTree={setTree}
        ${propsString}
      />
    </View>
  )
}

export default index`);
    }, [props]);

    const handleChange = (key: string, value: any) => {
        setProps((prev) => ({ ...prev, [key]: value }));
    };

    return (
        <section className="mb-12 border-2 px-8 py-8 border-gray-700 rounded-xl ">
            <h2 className="text-xl font-semibold mb-3 text-gray-100">Interactive Sample Code</h2>
            <h3 className="text-xl font-semibold mb-6 text-gray-300" >Select the values and just copy the code </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 border-1 px-6 py-8 border-gray-700 rounded-xl ">
                {propsConfig.map((p) => (
                    <div key={p.name} className="flex flex-col">
                        <label className="text-gray-200 mb-1">{p.name}</label>
                        {p.type === "boolean" && (
                            <select
                                value={props[p.name]}
                                onChange={(e) => handleChange(p.name, e.target.value === "true")}
                                className="bg-gray-800 text-gray-200 p-2 rounded"
                            >
                                <option value="true">true</option>
                                <option value="false">false</option>
                            </select>
                        )}
                        {p.type === "select" && (
                            <select
                                value={props[p.name]}
                                onChange={(e) => handleChange(p.name, e.target.value)}
                                className="bg-gray-800 text-gray-200 p-2 rounded"
                            >
                                {p.options?.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        )}
                        {p.type === "string" && (
                            <input
                                type="text"
                                value={props[p.name]}
                                onChange={(e) => handleChange(p.name, e.target.value)}
                                className="bg-gray-800 text-gray-200 p-2 rounded"
                            />
                        )}
                        {p.type === "number" && (
                            <input
                                type="number"
                                value={props[p.name]}
                                onChange={(e) => handleChange(p.name, Number(e.target.value))}
                                className="bg-gray-800 text-gray-200 p-2 rounded"
                            />
                        )}
                        {p.type === "color" && (
                            <input
                                type="color"
                                value={props[p.name]}
                                onChange={(e) => handleChange(p.name, e.target.value)}
                                className="w-16 h-10 p-1 rounded border border-gray-700"
                            />
                        )}
                    </div>
                ))}
            </div>

            <h2 className="text-xl font-semibold mb-3 text-gray-100">Ready to use code</h2>
            <CopyableCommand command={sampleCode} />
        </section>
    );
};

export default InteractiveSampleCode;
