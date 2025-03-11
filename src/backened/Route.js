import Todo from './db.js'
import  express  from 'express';
const app=express()
app.use(express.json());

app.post('/todo', async(req, res) => {
    const { todo } = req.body;
    
    if (!todo) {
        return res.status(400).json({ error: "Todo is required" });
    }

    // Assuming you have a MongoDB model named `Todo`
    const newTodo = new Todo({ text: todo });

   await newTodo.save()
      });

      app.get('/todo', async (req, res) => {
        try {
            const allTodo = await Todo.find();
            res.status(200).json(allTodo);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
    

    app.delete("/todos/:id", async (req, res) => {
        try {
          await Todo.findByIdAndDelete(req.params.id);
          res.status(200).json({ message: "Todo deleted successfully" });
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      });

      app.patch("/todos/:id", async (req, res) => {
        try {
          const todo = await Todo.findById(req.params.id);
          if (!todo) return res.status(404).json({ error: "Todo not found" });
      
          todo.completed = !todo.completed;
          await todo.save();
          res.status(200).json(todo);
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
      });
      console.log(Todo)
