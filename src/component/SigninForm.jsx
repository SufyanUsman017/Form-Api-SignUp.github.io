import React from 'react'

function SigninForm() {
  return (
    <div class="signin-container">
        <h2>Sign In</h2>
        <form class="signin-form">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required/>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required/>

            <button type="submit">Sign In</button>
        </form>
    </div>
  )
}

export default SigninForm
