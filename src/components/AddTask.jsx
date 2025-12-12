import { useState } from 'react';

// O componente agora recebe a função 'onAddTask' do pai como prop
function AddTask({ onAddTask }) { 
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();         // Impede o navegador de recarregar a página, 
        
        if (title.trim()) { 
            onAddTask(title.trim()); 
            setTitle(''); 
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
            <input
                type="text"
                placeholder="Nova tarefa..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex-grow p-2 rounded-md border border-slate-700"
            />
            <button
                type="submit"
                className="bg-green-600 text-white p-2 rounded-md font-semibold hover:bg-green-700"
            >
                Adicionar
            </button>
        </form>
    );
}

export default AddTask;