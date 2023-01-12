using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolApplicationWebApi.DataAccessLayer
{
    [Table("Course")]
    public class CCourse
    {
        [Key]
        public int CourseId { get; set; }
        [Required]
        public string CourseName { get; set; }
        [Required]
        public string TeacherName { get; set; }

        public ICollection<CStudent> Student { get; set; }
    }
}
