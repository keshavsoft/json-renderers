import registerGlobal from "./registerGlobal.js";

import guardFunc from "json-renderers-guard";

import buildSpec from "./buildSpec/index.js";
import renderToDom from "./renderToDom/index.js";

// Main orchestrator: coordinates validation, spec building, and DOM rendering
const render = (config = {}) => {
    guardFunc(config);
    const showLog = config?.showLog;
    const localOptions = config?.options;

    if (showLog) console.log("first : ", config?.options, config?.columns, config?.data, config?.appendPosition);

    const spec = buildSpec({
        inColumns: config.columns,
        inData: config.data,
        inType: config.type,
        inShowLog: config.showLog,
        inOptions: localOptions
    });

    return renderToDom({
        inSpec: spec,
        inTargetHtmlId: config.targetHtmlId,
        inAppendPosition: config.appendPosition,
        inShowLog: config.showLog
    });
};

registerGlobal(render);

export { render };
export default render;
