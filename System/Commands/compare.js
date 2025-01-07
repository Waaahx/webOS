import { Command } from "../Processes/_Command.js";
import { _Files_ } from "../Browser/File.js";

export const compare = new Command((user, output, arg) => {
    if (!arg[1] || !arg[2]) {
        output.print('You must specify two files to compare.');
        return;
    }

    const file1 = _Files_.find(file => file.name === arg[1] && file.path === user.path);
    const file2 = _Files_.find(file => file.name === arg[2] && file.path === user.path);

    if (!file1 || !file2) {
        output.print('One or both files not found or you do not have access to them.');
        return;
    }

    const measurePerformance = (fileContent) => {
        try {
            const start = performance.now();
            eval(fileContent);
            const end = performance.now();
            return end - start;
        } catch (error) {
            output.print(`Error during execution of ${fileContent.name}: ${error.message}`);
            return null;
        }
    };

    const time1 = measurePerformance(file1.content);
    const time2 = measurePerformance(file2.content);

    if (time1 !== null && time2 !== null) {
        const isFile1Faster = time1 < time2;

        // Output execution times with color coding
        output.print(
            `%cExecution time for ${arg[1]}: ${time1.toFixed(2)} ms`,
            isFile1Faster ? 'color: green;' : 'color: red;'
        );
        output.print(
            `%cExecution time for ${arg[2]}: ${time2.toFixed(2)} ms`,
            isFile1Faster ? 'color: red;' : 'color: green;'
        );

        const diff = Math.abs(time1 - time2).toFixed(2);
        output.print(`Time difference: ${diff} ms`);
        if (isFile1Faster) {
            output.print(`${arg[1]} is faster by ${diff} ms.`);
        } else if (time2 < time1) {
            output.print(`${arg[2]} is faster by ${diff} ms.`);
        } else {
            output.print(`Both files have the same execution time.`);
        }
    }
});