/* Scripts */

// Purely for reference
let instr = {
    carState: {
        outOfBounds: "Your vehicle is out of sensor range. Please reposition it to the indicated area."
    },
    overview: {
        main: "Please remain still while the auto-tester evaluates the following details:",
        detail1: "Your vehicle's license plate.",
        detail2: "A picture of the driver.",
        detail3: "A sample of the driver's breath.",
        detail4: "A brief evaluation of the driver's movement patterns",
        detail5: "A brief evaluation of the driver's pupil dilation"
    },
    stepOne: {
        1: "The device is taking a snapshot of the driver.",
        2: "The device is taking a snapshot of the vehicle license plate."
    },
    stepTwo: "The device will now sample your breath. Please take a deep breath and exhale through the mouth 5 times.",
    stepThree: "The device will now sample your movement patterns. Please remain still with both hands on the wheel.",
    stepFour: "The device will no sample your pupils. Please remain still and look directly into the camera located at the top of the device",
    passed: {
        msg: "The device has determined that you are sober. Good thinking!",
        drive: "The barricade is now disengaged. Please pass through and drive safely. Thank you."
    },
    failed: {
        msg: "The device has determined that you are not sober.",
        stepOne: "Please pull over the vehicle to the indicated area on the display.",
        stepTwo: "Failure to heed this instruction will result in the EMP device disabling your vehicle permanently.",
        stepThree: "The assigned police units for this device have been notified, and they are on their way to evaluate you further."
    }
};

// 1. Display the page
// 2. Wait 2 seconds and then scroll down to the bottom of the page
// 3. After reaching the bottom - wait 5 seconds and then redirect to the next instruction page.

// waitFor generates a promise each time which returns the result after a set time
const waitFor = (time) => new Promise(res => setTimeout(res, time));

// Async function for looping through an array and executing a callback
async function asyncForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        await callback(array[i], i, array);
    }
}

const init = async () => {

    const nodeList = document.querySelectorAll('.aux-target');

    asyncForEach(nodeList, async (item, i, array) => {
        // Render the item
        item.classList.remove('hidden');

        // Wait 3 seconds
        await waitFor(10000);

        // If last item don't hide
        if((i + 1) === array.length) {
            return;
        }

        // Hide the element
        item.classList.add('hidden');

        // Wait 1000 ms until it has faded out before looping again
        await waitFor(1000);
    });
};

const initOverview = async () => {

    const nodeList = document.querySelectorAll('.aux-target');

    asyncForEach(nodeList, async (item, i, array) => {
        item.classList.remove('hidden');
        await waitFor(4000);

        // If last item don't hide
        if((i + 1) === array.length) {
            return;
        }

        item.classList.add('hidden');
        // Wait 1000 ms until it has faded out before looping again
        await waitFor(1000);
    });

};

