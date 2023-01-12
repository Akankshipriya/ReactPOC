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
    public class StudentController : ControllerBase
    {
        private StudentDbContext _db;
        public StudentController(StudentDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        [Route("GetAllStudentDetails")]
        public IActionResult Get()
        {
            try
            {
                var listStudent = new List<CStudent>();
                listStudent = _db.Students.ToList();
                if (listStudent.Count > 0)
                {
                    return Ok(listStudent);
                }
                return NotFound("No Record To Display! Please insert data first");
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

        }

        [HttpGet]
        [Route("GetStudentDetail")]
        public IActionResult Get(int id)
        {
            try
            {
                var result = _db.Students.Where(x => x.StudentId == id).FirstOrDefault();
                if (result != null)
                {
                    return Ok(result);
                }
                return NotFound($"Student with id = {id} is not available. Please add!");
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpDelete]
        [Route("DeleteStudent")]
        public IActionResult Delete(int id)
        {
            try
            {
                var result = _db.Students.Where(x => x.StudentId == id).FirstOrDefault();
                if (result != null)
                {
                    _db.Students.Remove(result);
                    _db.SaveChanges();
                    return Ok(result);
                }
                return NotFound($"Student with id = {id} is not available.");
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPost]
        [Route("AddStudent")]
        public IActionResult Post(CStudent StudentObj)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                _db.Students.Add(new CStudent()
                {
                    StudentId = StudentObj.StudentId,
                    Name = StudentObj.Name,
                    ContactNo = StudentObj.ContactNo,
                    Email = StudentObj.Email,
                    Std = StudentObj.Std,
                    CourseName = StudentObj.CourseName,
                    Course = StudentObj.Course
                });
                _db.SaveChanges();
                return Ok();
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPut]
        [Route("UpdateStudent")]
        public IActionResult Put(int id, CStudent StudentObj)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var existingStudent = _db.Students.Where(x => x.StudentId == id).FirstOrDefault();
                    if (existingStudent != null)
                    {
                        existingStudent.Name = StudentObj.Name;
                        existingStudent.ContactNo = StudentObj.ContactNo;
                        existingStudent.Email = StudentObj.Email;
                        existingStudent.Std = StudentObj.Std;
                        existingStudent.CourseName = StudentObj.CourseName;
                        existingStudent.Course = StudentObj.Course;
                        _db.SaveChanges();
                        return Ok();
                    }
                }
                return BadRequest(ModelState);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
