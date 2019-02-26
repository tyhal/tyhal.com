import React, {Component} from 'react'
import recipes from "../../resource/recipes";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";

// app component
class Food extends Component {
    // render
    render() {
        return (<div>
            <div>
                <Breadcrumb>
                    <BreadcrumbItem><a href="#">This</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="#">Is</a></BreadcrumbItem>
                    <BreadcrumbItem active>Example</BreadcrumbItem>
                </Breadcrumb>
            </div>
            {React.cloneElement(this.props.children, {recipes: recipes})}
        </div>)
    }
}

export default Food
