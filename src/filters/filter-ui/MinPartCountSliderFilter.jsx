import React from "react";
import { useKGCtx } from "../../knowledgegraph/ctx/useKGCtx";
import LeftGenericSliderFilter from "./LeftGenericSliderFilter";

export default function MinPartCountSliderFilter({}) {
    const { knowledgeGraph } = useKGCtx();
    return (
        <LeftGenericSliderFilter
            resources={knowledgeGraph.getResources()}
            id="minParts"
            resourceProperty="parts"
            sliderStep={1}
        />
    );
}
