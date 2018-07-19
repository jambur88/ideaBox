$('.input-title').focus();
$('.input-title').on('keyup', lockSaveButton);
$('.input-body').on('keyup', lockSaveButton);
$('.save-button').on('click', saveIdea);
$('.card-parent').on('click', deleteIdea);
$('.card-parent').on('click', upVoteIdea);
$('.card-parent').on('click', downVoteIdea);
$('.search-input').on('keyup', searchIdeas);
$('.card-parent').on('keyup', editCardTitle);
$('.card-parent').on('keyup', editCardBody);
$('.card-parent').bind('keypress', restrainReturn)

$( document ).ready(function() {
  retrieveIdea(); 
});

function retrieveIdea() {
  for (var i = 0; i < localStorage.length; i++) {
    var retrievedIdea = localStorage.getItem(localStorage.key(i));
    var parsedIdea = JSON.parse(retrievedIdea);
    displayIdea(parsedIdea);
  }
};

function lockSaveButton() {
  if ($('.input-title').val() !== '' && $('.input-body').val() !== '') {
    $('.save-button').prop('disabled', false);
  } else {
    $('.save-button').prop('disabled', true);
  }
};

function saveIdea(e) {
  e.preventDefault();
  newIdea = new AddIdea();
  displayIdea(newIdea);
  clearInputs();
  $('.input-title').focus();
};

function searchIdeas() {
  var $ideas = $('.card-title');
  var val = $.trim(this.value).toUpperCase();
  if (val === "")
    $ideas.parent().parent().show();
  else {
    $ideas.parent().parent().hide();
    $ideas.filter(function() {
      return -1 != $(this).text().toUpperCase().indexOf(val);
    }).parent().parent().show();
  }
};

function deleteIdea(e) {
  if ($(e.target).is('.delete-button')) {
    localStorage.removeItem($(e.target).parent().parent().data("name"));
    $(e.target).parent().parent().fadeOut(350);
  }
};

function editCardTitle(e) {
  if ($(e.target).is('.card-title')) {
    var uniqueId = $(e.target).parent().parent().data("name");
    var parsedObject = JSON.parse(localStorage.getItem(uniqueId));
    parsedObject.title = $(e.target).text();
    localStorage.setItem(uniqueId, JSON.stringify(parsedObject));
    if (e.keyCode == 13) {
      $('.card-title').blur();
    }
  }
};

function editCardBody(e) {
  if ($(e.target).is('.card-body')) {
    var uniqueId = $(e.target).parent().data("name");
    var parsedObject = JSON.parse(localStorage.getItem(uniqueId));
    parsedObject.body = $(e.target).text();
    localStorage.setItem(uniqueId, JSON.stringify(parsedObject));
    if (e.keyCode == 13) {
      $('.card-body').blur();
    }
  }
};

function upVoteIdea(e) {
  if ($(e.target).is('.up-vote-button')) {
    var uniqueId = $(e.target).parent().data("name");
    var parsedObject = JSON.parse(localStorage.getItem(uniqueId));
    if (parsedObject.quality == 'swill') {
      parsedObject.quality = 'plausible';
      $(e.target).parent().find('.quality-score').text('plausible');
    } else if (parsedObject.quality == 'plausible') {
      parsedObject.quality = 'genius';
      $(e.target).parent().find('.quality-score').text('genius');
    }
    localStorage.setItem(uniqueId, JSON.stringify(parsedObject));
  }
};

function downVoteIdea(e) {
  if ($(e.target).is('.down-vote-button')) {
    var uniqueId = $(e.target).parent().data("name");
    var parsedObject = JSON.parse(localStorage.getItem(uniqueId));
    if (parsedObject.quality == 'genius') {
      parsedObject.quality = 'plausible';
      $(e.target).parent().find('.quality-score').text('plausible');
    } else if (parsedObject.quality == 'plausible') {
      parsedObject.quality = 'swill';
      $(e.target).parent().find('.quality-score').text('swill');
    }
    localStorage.setItem(uniqueId, JSON.stringify(parsedObject));
  }
};

function AddIdea(id, title, body, quality) {
  this.id = $.now();
  this.title = $('.input-title').val();
  this.body = $('.input-body').val();
  this.quality = quality || 'swill';
};

function displayIdea(newIdea) {
  $('.card-parent').prepend(`
    <li class="card" data-name="${newIdea.id}">
    <article class="card-header clearfix">
    <h2 class="card-title" contenteditable>${newIdea.title}</h2>
    <button class="delete-button"></button>
    </article>
    <p class="card-body" contenteditable>${newIdea.body}</p>
    <button class="up-vote-button"></button>
    <button class="down-vote-button"></button>
    <p class="quality-font">quality:</p>&nbsp<p class="quality-score">${newIdea.quality}</p>
    <hr>
    </li>`);
  localStorage.setItem(newIdea.id, JSON.stringify(newIdea));
};

function clearInputs() {
  $('.input-title').val(''); 
  $('.input-body').val('');
};

function restrainReturn(e) {
  if (e.keyCode == 13) {
    return false;
  };
};