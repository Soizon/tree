const motorcycle = (cycle) => {
    return tree(
        'div',
        {'class': 'motorcycle'},
        [
            tree(
                'div',
                {'class': 'motorcycle__img'},
                [   
                    tree(
                        'img',
                        {'src': cycle.img}
                    )
                ]
            ),
            tree(
                'h2',
                {'class': 'motorcycle__title'},
                [cycle.name]
            ),
            tree(
                'div',
                {'class': 'motorcycle__feature'},
                [motorcycleFeatureList(cycle.feature)]
            )
        ]
    );
}

const motorcycleFeatureList = (list) => { 
    return tree(
        'ul',
        {'class': 'motorcycle__feature__list'},
        [
            tree(
                'li',
                {},
                [
                    tree(
                        'span',
                        {'class': 'icon-crosshair'}
                    ),
                    list.cylinder
                ]
            ),
            tree(
                'li',
                {},
                [
                    tree(
                        'span',
                        {'class': 'icon-droplet'}
                    ),
                    list.tank
                ]
            ),
            tree(
                'li',
                {},
                [
                    tree(
                        'span',
                        {'class': 'icon-clock'}
                    ),
                    list.power
                ]
            )
        ]
    );    
} 