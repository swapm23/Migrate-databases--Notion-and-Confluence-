import React from 'react'

export default function TokenForm(props) {
  return (

<form>
  <div class="form-group" id = "ft1">
    <label for="exampleInputEmail1"></label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="DATABASE_ID"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"></label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Notion API token"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your Token with anyone else.</small>
  </div>
  <div class="form-check">
  </div>
  <button  type="submit" class="btn btn-primary" >Submit</button>
</form>
  )
}
