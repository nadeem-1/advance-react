import React from "react";
import ArticleList from "../ArticleList";

import renderer from 'react-test-renderer';
import { describe } from "pm2";
import { internalIP } from "webpack-dev-server";

describe('ArticleList',()=>{
    it('renders correctly',()=>{
       const element= renderer.create(
           <div>Hello</div>
        ).toJSON();
        console.log(element,"test");
    })
})