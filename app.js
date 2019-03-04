const busListUl = document.querySelector(".bus_list").children;

const getNums = inputList => {
    [...busListUl].forEach((item, idx) => {
        console.log(item, idx);
    });
};

getNums(busListUl);