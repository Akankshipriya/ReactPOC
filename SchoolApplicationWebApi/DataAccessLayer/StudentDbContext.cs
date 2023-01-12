using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolApplicationWebApi.DataAccessLayer
{
    public class StudentDbContext : DbContext
    {
        public StudentDbContext(DbContextOptions<StudentDbContext> options) : base(options)
        {

        }
        public DbSet<CStudent> Students { get; set; }
        public DbSet<CCourse> Courses { get; set; }
    }
}
