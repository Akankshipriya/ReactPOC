using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolApplicationWebApi.DataAccessLayer
{
    [Table("Student")]
    public class CStudent
    {
        [Key]
        public int StudentId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [MaxLength(10)]
        public string ContactNo { get; set; }
        public string Email { get; set; }
        [Required]
        public string Std { get; set; }
        [Required]
        public string CourseName { get; set; }
        public CCourse Course { get; set; }
    }
}
