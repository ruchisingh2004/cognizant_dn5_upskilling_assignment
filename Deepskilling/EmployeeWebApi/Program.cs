var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

// -------------------- HARD CODED EMPLOYEES --------------------
var employees = new List<Employee>
{
    new Employee(1, "Ravi", "IT"),
    new Employee(2, "Anita", "HR"),
    new Employee(3, "John", "Finance")
};

// -------------------- GET ALL --------------------
app.MapGet("/employees", () =>
{
    return Results.Ok(employees);
});

// -------------------- PUT (UPDATE EMPLOYEE) --------------------
app.MapPut("/employees/{id}", (int id, Employee input) =>
{
    // Validation 1: id <= 0
    if (id <= 0)
    {
        return Results.BadRequest("Invalid employee id");
    }

    // Find employee
    var emp = employees.FirstOrDefault(e => e.Id == id);

    // Validation 2: not found
    if (emp == null)
    {
        return Results.BadRequest("Invalid employee id");
    }

    // Update employee
    emp.Name = input.Name;
    emp.Department = input.Department;

    return Results.Ok(emp);
});

// -------------------- RUN APP --------------------
app.Run();

// -------------------- MODEL --------------------
public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Department { get; set; }

    public Employee(int id, string name, string department)
    {
        Id = id;
        Name = name;
        Department = department;
    }
}