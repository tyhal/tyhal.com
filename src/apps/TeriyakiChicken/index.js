import React, {Component} from 'react'
import {Card} from "reactstrap";

// app component
class Teriyaki extends Component {
    // render
    render() {
        return (<Card>
                <h1>Teriyaki Chicken</h1>
                <p>
                    Source: Sachie's Kitchen
                </p>
                <Card>
                    Makes: 4 servings
                    Prep Time: 10 mins
                    Cook Time: 15 mins

                    Ingredients
                    4 Chicken - Thigh Boneless
                    Salt - Sea
                    3 tbsp Flour - High Grade
                    Sesame - Seeds
                    225 ml Teriyaki Sauce, See recipe
                    Rice for 4, See recipe
                    Japanese Coleslaw, See recipe
                    2 Onions - Green / Spring
                    Olive Oil - Normal

                    Notes / Directions
                    Score the chicken and sprinkle salt. Cover the chicken with flour.

                    Heat a pan, add cooking oil and cook the chicken through - skin side first, 2-3 Minutes each side.

                    Pour the Teriyaki sauce over and simmer until the sauce becomes thick.

                    Slice the chicken and serve on a plate. Garnish with slices spring onion and sesame seeds if you
                    would
                    like.

                    Service with steamed rice and colslaw
                </Card>
                <Card>
                    <h2>Teriyaki Sauce</h2>
                    Source: Sachies Kitchen

                    Makes: 4 servings
                    Prep Time: 10 mins
                    Cook Time: 10 mins

                    Ingredients
                    150 ml Cooking Sake
                    150 ml Mirin
                    150 ml Soy Sauce - Kikoman
                    75 g Sugar - Brown

                    Notes / Directions
                    Combine sugar, mirin and sake in a small pot and bring to the boil. Simmer for 2 minutes then add
                    soy
                    and simmer for another 5 minutes or until it starts to thicken. Remove heat and cool either use
                    fresh or
                    bottle and keep in the fridge.

                </Card>
                <Card>
                    <h2>Japanese Coleslaw</h2>
                    Source: Sachie's Kitchen

                    <bold>Makes:</bold> 3 servings
                    Prep Time: 5 mins

                    Ingredients
                    2 Handfuls Cabbage - Green, Shredded
                    2 Handfuls Cabbage - Red, Shredded
                    4 tbsp Mayonnaise - Japanese
                    Salt - Sea
                    Pepper - White

                    Notes / Directions
                    Mix together in a bowl, serve on large plate to share
                </Card>
            </Card>
        )
    }
}

export default Teriyaki
