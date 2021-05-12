import $ from 'jquery'
import "bootstrap"
import {getComments} from "./services/getComments";

export const comments = () =>{
  getComments().then(function(data){
    showComments(data)
  });
};

const showComments = (comments) =>{
  console.debug(comments);
  console.debug($('body'));
}

