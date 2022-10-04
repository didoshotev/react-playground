import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "../CourseForm/CourseForm";

const ManageCourse = ({ courses, authors, loadAuthors, loadCourses }) => {
  useEffect(() => {
    loadCourses();
    loadAuthors();
  }, [loadAuthors, loadCourses]);

  return (
    <>
      <h3>Manage Courses</h3>
      <CourseForm />
    </>
  );
};

ManageCourse.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);
