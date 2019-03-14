const busListUl = document.querySelector(".bus_list");
const busListUlList = busListUl.children;

const getNums = inputList => {
    [...inputList].forEach((item, idx) => {
        // console.log(idx, item.dataset.pos);
        item.dataset.pos = idx;
    });
};

const calcChange = (pos1, pos2) => {
    const change = pos1 - pos2;
    console.log(change);
};

const moveRouteDown = e => {
    const currentEl = e.target.parentNode;
    const nextEl = currentEl.nextElementSibling;
    const origPos = Number(currentEl.dataset.pos);
    const updatePos = Number(nextEl.dataset.pos);
    if (currentEl.dataset.pos === String((busListUl.children.length - 1))) {
        return false;
    } else {
        busListUl.insertBefore(nextEl, currentEl);
        calcChange(origPos, updatePos);
        getNums(busListUlList);
    }

};

const moveRouteUp = e => {
    const currentEl = e.target.parentNode;
    const prevEl = currentEl.previousElementSibling;
    if (currentEl.dataset.pos === "0") {
        return false;
    } else {
        busListUl.insertBefore(currentEl, prevEl);
        getNums(busListUlList);
    }

};


// visual .rank can be calculated as data-pos + 1
// on click "up"/"down", pos needs to be switched with above/below li el
// and routes need to be switched
// clicking "down" on route 1 pos 0 moves it to pos 1, route 2 becomes pos 0

busListUl.addEventListener('click', event => {
    if (event.target.tagName !== "SPAN") {
        return false;
    } else if (event.target.tagName === "SPAN" && event.target.className === "up") {
        moveRouteUp(event);
    } else {
        moveRouteDown(event);
    }
});

// calculate pos based on location in array


// const nextEl = event.target.parentNode.nextElementSibling;
// const el = event.target.parentNode;
// const newPos = origPos + 1;
// const origRoute = el.dataset.route;
// const nextRoute = nextEl.dataset.route;
// el.dataset.pos = newPos;
// el.dataset.route = nextRoute;
// nextEl.dataset.pos = origPos;
// nextEl.dataset.route = origRoute;
// console.log(el.querySelector(".route"));