"use strict";

var tabsBtn = document.querySelectorAll('.catalog__nav-btn');
var tabsItem = document.querySelectorAll('.catalog__item');
var tabsItemLink = document.querySelectorAll('.catalog__card-link');
tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    var path = e.currentTarget.dataset.path;
    tabsBtn.forEach(function (btn) {
      btn.classList.remove('catalog__nav-btn--active');
    });
    e.currentTarget.classList.add('catalog__nav-btn--active');
    tabsItem.forEach(function (element) {
      element.classList.remove('catalog__item--active');
    });
    document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('catalog__item--active');
  });
});
tabsItemLink.forEach(function (el) {
  el.addEventListener('click', function (e) {
    var path = e.currentTarget.dataset.tabs;
    tabsItem.forEach(function (element) {
      element.classList.remove('catalog__item--active');
    });
    tabsBtn.forEach(function (btn) {
      btn.classList.remove('catalog__nav-btn--active');
    });
    // document.querySelector(`[data-target="${path}"]`).classList.add('catalog__item--active');
    // document.querySelector(`[data-path="${path}"]`).classList.add('catalog__nav-btn--active');
    console.log(path);
  });
});
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Плавный скролл
var anchors = document.querySelectorAll('a[href^="#"]');
var _iterator = _createForOfIteratorHelper(anchors),
  _step;
try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href');
      document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbInRhYnNCdG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0YWJzSXRlbSIsInRhYnNJdGVtTGluayIsImZvckVhY2giLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwYXRoIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJidG4iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwiY29uY2F0IiwiZWwiLCJ0YWJzIiwiY29uc29sZSIsImxvZyIsImFuY2hvcnMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwiX2xvb3AiLCJhbmNob3IiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiYmxvY2tJRCIsImdldEF0dHJpYnV0ZSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInMiLCJuIiwiZG9uZSIsImVyciIsImYiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO0FBQzlELElBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztBQUM1RCxJQUFNRSxZQUFZLEdBQUdILFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMscUJBQXFCLENBQUM7QUFFckVGLE9BQU8sQ0FBQ0ssT0FBTyxDQUFDLFVBQUFDLE9BQU8sRUFBSTtFQUN2QkEsT0FBTyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQyxFQUFLO0lBQ3JDLElBQU1DLElBQUksR0FBR0QsQ0FBQyxDQUFDRSxhQUFhLENBQUNDLE9BQU8sQ0FBQ0YsSUFBSTtJQUN6Q1QsT0FBTyxDQUFDSyxPQUFPLENBQUMsVUFBQU8sR0FBRyxFQUFJO01BQUVBLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsMEJBQTBCLENBQUM7SUFBQyxDQUFDLENBQUM7SUFDNUVOLENBQUMsQ0FBQ0UsYUFBYSxDQUFDRyxTQUFTLENBQUNFLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQztJQUN6RFosUUFBUSxDQUFDRSxPQUFPLENBQUMsVUFBU0MsT0FBTyxFQUFFO01BQUVBLE9BQU8sQ0FBQ08sU0FBUyxDQUFDQyxNQUFNLENBQUMsdUJBQXVCLENBQUM7SUFBQyxDQUFDLENBQUM7SUFDekZiLFFBQVEsQ0FBQ2UsYUFBYSxtQkFBQUMsTUFBQSxDQUFrQlIsSUFBSSxRQUFJLENBQUMsQ0FBQ0ksU0FBUyxDQUFDRSxHQUFHLENBQUMsdUJBQXVCLENBQUM7RUFDNUYsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUZYLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFVBQUFhLEVBQUUsRUFBSTtFQUN2QkEsRUFBRSxDQUFDWCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsQ0FBQyxFQUFJO0lBQy9CLElBQU1DLElBQUksR0FBR0QsQ0FBQyxDQUFDRSxhQUFhLENBQUNDLE9BQU8sQ0FBQ1EsSUFBSTtJQUN6Q2hCLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDLFVBQVNDLE9BQU8sRUFBRTtNQUFFQSxPQUFPLENBQUNPLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLHVCQUF1QixDQUFDO0lBQUMsQ0FBQyxDQUFDO0lBQ3pGZCxPQUFPLENBQUNLLE9BQU8sQ0FBQyxVQUFBTyxHQUFHLEVBQUk7TUFBRUEsR0FBRyxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztJQUFDLENBQUMsQ0FBQztJQUM1RTtJQUNBO0lBQ0FNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWixJQUFJLENBQUM7RUFDckIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7QUN2QkY7QUFDQSxJQUFNYSxPQUFPLEdBQUdyQixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztBQUFDLElBQUFxQixTQUFBLEdBQUFDLDBCQUFBLENBRXZDRixPQUFPO0VBQUFHLEtBQUE7QUFBQTtFQUFBLElBQUFDLEtBQUEsWUFBQUEsTUFBQSxFQUFFO0lBQUEsSUFBbkJDLE1BQU0sR0FBQUYsS0FBQSxDQUFBRyxLQUFBO0lBQ1hELE1BQU0sQ0FBQ3BCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDQyxDQUFDLEVBQUs7TUFDcENBLENBQUMsQ0FBQ3FCLGNBQWMsQ0FBQyxDQUFDO01BQ2xCLElBQU1DLE9BQU8sR0FBR0gsTUFBTSxDQUFDSSxZQUFZLENBQUMsTUFBTSxDQUFDO01BQzNDOUIsUUFBUSxDQUFDZSxhQUFhLENBQUNjLE9BQU8sQ0FBQyxDQUFDRSxjQUFjLENBQUM7UUFDM0NDLFFBQVEsRUFBRSxRQUFRO1FBQ2xCQyxLQUFLLEVBQUU7TUFDWCxDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTixDQUFDO0VBVEQsS0FBQVgsU0FBQSxDQUFBWSxDQUFBLE1BQUFWLEtBQUEsR0FBQUYsU0FBQSxDQUFBYSxDQUFBLElBQUFDLElBQUE7SUFBQVgsS0FBQTtFQUFBO0FBU0MsU0FBQVksR0FBQTtFQUFBZixTQUFBLENBQUFmLENBQUEsQ0FBQThCLEdBQUE7QUFBQTtFQUFBZixTQUFBLENBQUFnQixDQUFBO0FBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFic0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nX19uYXYtYnRuJyk7XHJcbmNvbnN0IHRhYnNJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2dfX2l0ZW0nKTtcclxuY29uc3QgdGFic0l0ZW1MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2dfX2NhcmQtbGluaycpO1xyXG5cclxudGFic0J0bi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnBhdGg7XHJcbiAgICAgICAgdGFic0J0bi5mb3JFYWNoKGJ0biA9PiB7IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdjYXRhbG9nX19uYXYtYnRuLS1hY3RpdmUnKSB9KTtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnY2F0YWxvZ19fbmF2LWJ0bi0tYWN0aXZlJyk7XHJcbiAgICAgICAgdGFic0l0ZW0uZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2F0YWxvZ19faXRlbS0tYWN0aXZlJykgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApLmNsYXNzTGlzdC5hZGQoJ2NhdGFsb2dfX2l0ZW0tLWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxudGFic0l0ZW1MaW5rLmZvckVhY2goZWwgPT4ge1xyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRhYnM7XHJcbiAgICAgICAgdGFic0l0ZW0uZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2F0YWxvZ19faXRlbS0tYWN0aXZlJykgfSk7XHJcbiAgICAgICAgdGFic0J0bi5mb3JFYWNoKGJ0biA9PiB7IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdjYXRhbG9nX19uYXYtYnRuLS1hY3RpdmUnKSB9KTtcclxuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCkuY2xhc3NMaXN0LmFkZCgnY2F0YWxvZ19faXRlbS0tYWN0aXZlJyk7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGF0aD1cIiR7cGF0aH1cIl1gKS5jbGFzc0xpc3QuYWRkKCdjYXRhbG9nX19uYXYtYnRuLS1hY3RpdmUnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXRoKTtcclxuICAgIH0pXHJcbn0pIiwiLy8g0J/Qu9Cw0LLQvdGL0Lkg0YHQutGA0L7Qu9C7XHJcbmNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpO1xyXG5cclxuZm9yIChsZXQgYW5jaG9yIG9mIGFuY2hvcnMpIHtcclxuICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGJsb2NrSUQgPSBhbmNob3IuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihibG9ja0lEKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgICAgICBibG9jazogXCJzdGFydFwiXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbiJdfQ==
