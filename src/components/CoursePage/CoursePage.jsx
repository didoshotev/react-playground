import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import classes from "./course-page.module.scss";
import CourseList from "../CourseList/CourseList";

class CoursePage extends React.Component {
  // handleChange = (event) => {
  //   const course = { ...this.state.course, title: event.target.value };
  //   this.setState({ course });
  // };

  componentDidMount() {
    if (this.props.courses.length === 0) {
      this.props.courseActions.loadCourses().catch((err) => console.log(err));
    }
    if (this.props.authors.length === 0) {
      this.props.authorActions.loadAuthors();
    }
  }

  render() {
    return (
      <>
        {/* <form onSubmit={this.handleSubmit}>
          <h2>Courses</h2>
          <h3>Add course</h3>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.course.title}
          />
          <input type="submit" value="Save" />
        </form> */}
        <h3>Courses</h3>
        <div className={classes.container}>
          <CourseList
            courses={this.props.courses}
            authors={this.props.authors}
          />
        </div>
      </>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  courseActions: PropTypes.object.isRequired,
  authorActions: PropTypes.object.isRequired,
};

// determines what state is passed to our component via props
function mapStateToProps(state, ownProps) {
  // expose only the data you need
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find(
                (author) => author.id === course.authorId
              ).name,
            };
          }),
    authors: state.authors,
  };
}

// let us declare what actions to pass to our component on props - createCourse
// When we omit mapDispatchToProps, our component gets a dispatch prop injected automatically
function mapDispatchToProps(dispatch) {
  return {
    // createCourse: (course) => dispatch(courseActions.createCourse(course)),
    courseActions: bindActionCreators(courseActions, dispatch),
    authorActions: bindActionCreators(authorActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
