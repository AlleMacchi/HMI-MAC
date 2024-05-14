export function createSpeedometer (value, unit, title, maxValue){
    const degree = 270 * value / maxValue;

    const divStyleSingle = {
        background: `conic-gradient(var(--light-blue) 0deg, var(--light-blue) ${degree}deg, #3d3d3d ${degree}deg, #3d3d3d 270deg)`
    };

    let divStyle = divStyleSingle;

    return `
    <div class="Speedometer">
        <div id="Speedometer-title">
            <span id="MySpeedmeter-name">${title}</span>
        </div>
        <div class="Speedometer-circular-progress-bar">
            <div class="Speedometer-Circle-outer"></div>
            <div class="Speedometer-Circular-progress" style="background: ${divStyle.background}"></div>
            <div class="Speedometer-Circle-inner">
                <div id="Speedometer-text">
                    <span id="MySpeedmeter-value">${value} </span><br>
                    <span id="MySpeedmeter-unit">${unit}</span>
                </div>
            </div>
        </div>
    </div>
    `;
};

