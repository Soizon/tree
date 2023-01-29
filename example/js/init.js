const motorcycleWrap = () => {
            
    let currentCycle = 0;
    const maxCycle = dataCycle.length - 1;
    let currentMotorcycle = motorcycle(dataCycle[currentCycle]);

    const update = () => {
        const elementUpdate = motorcycle(dataCycle[currentCycle])
        currentMotorcycle.replaceWith(elementUpdate);

        currentMotorcycle = elementUpdate;
    }

    const next = () => {
        currentCycle++;
        if (currentCycle > maxCycle) currentCycle = 0;
        update();
    }

    const previous = () => {
        currentCycle--;
        if (currentCycle < 0) currentCycle = maxCycle;
        update();
    }

    return tree(
        'div',
        {'class': 'wrap'},
        [
            tree(
                'span',
                {'class': 'next icon-arrow-right', 'click': next}
            ),
            tree(
                'span',
                {'class': 'previous icon-arrow-left', 'click': previous}
            ),
            currentMotorcycle,
        ]
    )
}

document.querySelector('#root').appendChild( motorcycleWrap() );
