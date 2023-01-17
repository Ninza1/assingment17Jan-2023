console.log("Solution of 3rd question")


let input = ['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com', 'jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com']

	const finddomains = (input) => {

    let domainFre = {};
    let ans = [];

    for (let i = 0; i < input.length; i++) {

        // Find the index of '@' symbol in string
        let findindex = input[i].indexOf('@');

        if (input[i].substring(findindex + 1) in domainFre)
            domainFre[input[i].substring(findindex + 1)]++;
        else domainFre[input[i].substring(findindex + 1)] = 1;
    }

    for (let x in domainFre)
        ans.push([x, domainFre[x]]);


    return ans.sort();
}

let ans = finddomains(input);
for (let i = 0; i < ans.length; i++)
    document.write(`abc@${ans[i][0]} <br/>`);



