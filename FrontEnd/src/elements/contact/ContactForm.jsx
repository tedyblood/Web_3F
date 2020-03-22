import React, { Component } from "react";

export class ContactForm extends Component {
  render() {
    return (
      <React.Fragment>
        <form action="j-folder/php/action.php" method="post" class="j-forms" id="j-forms" novalidate>

<div class="header">
  <p>Contact form</p>
</div>


<div class="content">

  
  <div class="token">
    <?php echo $new_token->get_token();?>
  </div>
  

  
  <div class="unit">
    <label class="label">Name</label>
    <div class="input">
      <label class="icon-right" for="name">
        <i class="fa fa-user"></i>
      </label>
      <input type="text" placeholder="e.g. John Doe" id="name" name="name">
    </div>
  </div>
  

  
  <div class="unit">
    <label class="label">Email</label>
    <div class="input">
      <label class="icon-right" for="email">
        <i class="fa fa-envelope-o"></i>
      </label>
      <input type="email" placeholder="email@example.com" id="email" name="email">
    </div>
  </div>
  

  
  <div class="unit">
    <label class="label">Phone</label>
    <div class="input">
      <label class="icon-right" for="phone">
        <i class="fa fa-phone"></i>
      </label>
      <input type="text" placeholder="telephone or mobile" id="phone" name="phone">
    </div>
  </div>
  

  
  <div class="unit">
    <label class="label">Message</label>
    <div class="input">
      <textarea placeholder="your message..." spellcheck="false" name="message"></textarea>
    </div>
  </div>
  

  
  <div id="response"></div>
  

</div>


<div class="footer">
  <button type="submit" class="primary-btn">Send</button>
</div>


</form>
      <React.Fragmentv>
    );
  }
}

export default ContactForm;
