"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetTasks = GetTasks;
exports.SetTask = SetTask;
exports.DeleteTask = DeleteTask;
exports.UpdateTask = UpdateTask;
exports.UpdateTask_completed = UpdateTask_completed;
exports.UserLogin = exports.UserRegester = void 0;

var _axios = _interopRequireDefault(require("axios"));

require("bootstrap/dist/css/bootstrap.min.css");

var _reactBootstrap = require("react-bootstrap");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = "https://api-nodejs-todolist.herokuapp.com/user/register";

var UserRegester = function UserRegester(name, email, password, age) {
  _axios["default"].post(url, {
    "name": name,
    "email": email,
    "password": password,
    "age": age
  }).then(function (e) {
    console.log(e);
    window.location.replace("/Login");
  })["catch"](function (e) {
    if (e.response.data.startsWith("E11000")) {
      alert("this email is enrady use please enter anather email");
    }
  });
};

exports.UserRegester = UserRegester;

var UserLogin = function UserLogin(state) {
  var url = "https://api-nodejs-todolist.herokuapp.com/user/login";

  _axios["default"].post(url, state).then(function (e) {
    sessionStorage.setItem("token", e.data.token);
    window.location.replace("/todos");
    console.log(e);
  })["catch"](function (e) {
    if (e.response.data.startsWith("Unable to login")) alert("your password or email not correct !!");
  });
};

exports.UserLogin = UserLogin;
var user = "Bearer ".concat(sessionStorage.getItem("token"));
var config = {
  headers: {
    Authorization: user
  }
};

function GetTasks() {
  var url, data;
  return regeneratorRuntime.async(function GetTasks$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "https://api-nodejs-todolist.herokuapp.com/task";
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(url, config));

        case 3:
          data = _context.sent;
          return _context.abrupt("return", data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

function SetTask(data) {
  var url, response;
  return regeneratorRuntime.async(function SetTask$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          url = "https://api-nodejs-todolist.herokuapp.com/task";
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post(url, {
            "description": data.description
          }, config));

        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", response);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function DeleteTask(id) {
  var url, data;
  return regeneratorRuntime.async(function DeleteTask$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          url = "https://api-nodejs-todolist.herokuapp.com/task/".concat(id);
          _context3.next = 3;
          return regeneratorRuntime.awrap(_axios["default"]["delete"](url, config));

        case 3:
          data = _context3.sent;
          return _context3.abrupt("return", data);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function UpdateTask(id) {
  var url, data;
  return regeneratorRuntime.async(function UpdateTask$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          url = "https://api-nodejs-todolist.herokuapp.com/task/".concat(id._id);
          _context4.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].put(url, {
            "description": id.description
          }, config));

        case 3:
          data = _context4.sent;
          return _context4.abrupt("return", data);

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function UpdateTask_completed(id) {
  var url, data;
  return regeneratorRuntime.async(function UpdateTask_completed$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          url = "https://api-nodejs-todolist.herokuapp.com/task/".concat(id._id);
          _context5.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].put(url, {
            "completed": id.completed
          }, config));

        case 3:
          data = _context5.sent;
          return _context5.abrupt("return", data);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
}