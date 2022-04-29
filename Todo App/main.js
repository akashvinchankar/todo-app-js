window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list = document.querySelector('#tasks');
    const inputAlert = document.querySelector('.input-alert');

    form.addEventListener('submit', (e) => {
        e.preventDefault();  // This will prevent the page from refreshing

        const task = input.value; 

        if(!task) {
            inputAlert.innerText = 'Please enter a task';
            return;
        } else {
            inputAlert.innerText = '';
            console.log(task);
        }

        const list_el = document.createElement('div');
        list_el.classList.add('task');

        const list_content_el = document.createElement('div');
        list_content_el.classList.add('content');
        list_el.appendChild(list_content_el);

        const list_input_el = document.createElement('input');
        list_input_el.classList.add('text');
        list_input_el.type = 'text';
        list_input_el.value = task;
        list_input_el.setAttribute('readonly', 'readonly');
        list_content_el.appendChild(list_input_el);

        const list_actions_el = document.createElement('div');
        list_actions_el.classList.add('actions');

        const list_edit_el = document.createElement('button');
        list_edit_el.classList.add('edit');
        list_edit_el.innerText = 'Edit';

        const list_delete_el = document.createElement('button');
        list_delete_el.classList.add('delete');
        list_delete_el.innerText = 'Delete';

        list_actions_el.appendChild(list_edit_el);
        list_actions_el.appendChild(list_delete_el);

        list_el.appendChild(list_actions_el);

        list.appendChild(list_el);

        input.value = '';

        list_edit_el.addEventListener('click', () => {
            if(list_edit_el.innerText.toLowerCase() === 'edit') {
                list_input_el.removeAttribute('readonly');
                list_input_el.focus();
                list_edit_el.innerText = 'Save';
            } else {
                list_input_el.setAttribute('readonly', 'readonly');
                list_edit_el.innerText = 'Edit';
            }
        });

        list_delete_el.addEventListener('click', () => {
            list.removeChild(list_el);
        });

        

    });
});