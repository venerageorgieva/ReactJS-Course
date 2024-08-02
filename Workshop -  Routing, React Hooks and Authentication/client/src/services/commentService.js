import * as request from "../lib/request.js";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const getAll = async (gameId) =>{
  const result = await request.get(baseUrl)

   return Object.values(result).filter(comment => comment.gameId === gameId)


}

export const create = async (gameId,username,text) =>{
  const newComment = await request.post(baseUrl, {
    gameId,
    username,
    text
  });

  return newComment
}

