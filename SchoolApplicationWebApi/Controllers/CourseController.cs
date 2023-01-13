using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SchoolApplicationWebApi.DataAccessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolApplicationWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private StudentDbContext _db;
        public CourseController(StudentDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        [Route("GetAllCoursesName")]
        public IActionResult Get()
        {
            try
            {
                var listCourses = new List<CCourse>();
                listCourses = _db.Courses.ToList();
                if (listCourses.Count > 0)
                {
                    return Ok(listCourses);
                }
                return NotFound("No Record To Display! Please insert data first");
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

        }

        [HttpPost]
        [Route("AddCourse")]
        public IActionResult Post(CCourse CourseObj)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                _db.Courses.Add(new CCourse()
                {
                    CourseId = CourseObj.CourseId,
                    CourseName = CourseObj.CourseName,
                    TeacherName = CourseObj.TeacherName,
                });
                _db.SaveChanges();
                return Ok();
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
