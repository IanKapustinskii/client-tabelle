(() => {
    const emptyElement = document.createElement('div');
    emptyElement.classList.add('empty-message');
    emptyElement.textContent = 'Die Liste ist leer';
    const addButtonElement = document.createElement('button');
    addButtonElement.classList.add('btn-reset', 'tabelle-btn');
    addButtonElement.innerHTML = `<svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 8C16.71 8 18.5 6.21 18.5 4C18.5 1.79 16.71 0 14.5 0C12.29 0 10.5 1.79 10.5 4C10.5 6.21 12.29 8 14.5 8ZM5.5 6V3H3.5V6H0.5V8H3.5V11H5.5V8H8.5V6H5.5ZM14.5 10C11.83 10 6.5 11.34 6.5 14V16H22.5V14C22.5 11.34 17.17 10 14.5 10Z" fill="#9873FF"/>
    </svg> Fügen Sie einen Kunden hinzu`;

    let count = 0; 
    let idDeleteClient;

    const darkElement = document.createElement('div');

    function formClient() {
        // добавление элементов формы создания нового клиента
        const formElement = document.createElement('form');
        formElement.classList.add('form', 'add-form');

        const closeWrapper = document.createElement('div');
        closeWrapper.classList.add('close-wrapper');

        const formTitleElement = document.createElement('h3');
        formTitleElement.classList.add('title', 'add-form-title');

        const spanId = document.createElement('span');
        spanId.classList.add('change-id');

        const closeForm = closeButtonElement('close-button');

        const surnameInput = document.createElement('input');
        surnameInput.setAttribute('type', 'text');
        surnameInput.classList.add('input-add-form');
        surnameInput.placeholder = 'Nachname*';
        surnameInput.required = true;

        const nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.classList.add('input-add-form');
        nameInput.placeholder = 'Name*';
        nameInput.required = true;

        const lastnameInput = document.createElement('input');
        lastnameInput.setAttribute('type', 'text');
        lastnameInput.classList.add('input-add-form');
        lastnameInput.placeholder = 'Zweiter Vorname';

        const contactsWrapper = document.createElement('div');
        contactsWrapper.classList.add('contacts-wrapper', 'wrapper');
        contactsWrapper.id = 'contacts-wrapper';

        const contactButtonElement = document.createElement('button');
        contactButtonElement.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_121_884)">
    <path d="M8.00001 4.66659C7.63334 4.66659 7.33334 4.96659 7.33334 5.33325V7.33325H5.33334C4.96668 7.33325 4.66668 7.63325 4.66668 7.99992C4.66668 8.36659 4.96668 8.66659 5.33334 8.66659H7.33334V10.6666C7.33334 11.0333 7.63334 11.3333 8.00001 11.3333C8.36668 11.3333 8.66668 11.0333 8.66668 10.6666V8.66659H10.6667C11.0333 8.66659 11.3333 8.36659 11.3333 7.99992C11.3333 7.63325 11.0333 7.33325 10.6667 7.33325H8.66668V5.33325C8.66668 4.96659 8.36668 4.66659 8.00001 4.66659ZM8.00001 1.33325C4.32001 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.32001 14.6666 8.00001 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8.00001 1.33325ZM8.00001 13.3333C5.06001 13.3333 2.66668 10.9399 2.66668 7.99992C2.66668 5.05992 5.06001 2.66659 8.00001 2.66659C10.94 2.66659 13.3333 5.05992 13.3333 7.99992C13.3333 10.9399 10.94 13.3333 8.00001 13.3333Z" fill="#9873FF"/>
    </g><defs><clipPath id="clip0_121_884"><rect width="16" height="16" fill="white"/></clipPath></defs>
    </svg> Kontakt hinzufügen`;
        contactButtonElement.setAttribute('type', 'button');
        contactButtonElement.classList.add('btn-reset', 'add-button', 'button-wrapper');

        contactsWrapper.append(contactButtonElement);

        const saveButtonElement = buttonElement(['btn-reset', 'button-primary']);
        saveButtonElement.setAttribute('type', 'submit');
        saveButtonElement.textContent = 'Speichern';
        const cancelButton = buttonElement(['btn-reset', 'cancel-button']);

        const surnameLabel = document.createElement('label');
        surnameLabel.textContent = 'Nachname*';
        surnameLabel.setAttribute('for', 'changeSurname');
        surnameLabel.classList.add('change-label');
        const nameLabel = document.createElement('label');
        nameLabel.textContent = 'Name*';
        nameLabel.setAttribute('for', 'changeName');
        nameLabel.classList.add('change-label');
        const lastnameLabel = document.createElement('label');
        lastnameLabel.textContent = 'Zweiter Vorname';
        lastnameLabel.setAttribute('for', 'changeLastname')
        lastnameLabel.classList.add('change-label');

        closeWrapper.append(formTitleElement, spanId, closeForm);
        formElement.append(closeWrapper, surnameLabel, surnameInput, nameLabel, nameInput, lastnameLabel, lastnameInput, contactsWrapper, saveButtonElement, cancelButton);

        return {
            formElement,
            closeWrapper,
            formTitleElement,
            closeForm,
            surnameInput,
            nameInput,
            lastnameInput,
            contactsWrapper,
            contactButtonElement,
            saveButtonElement,
            cancelButton,
            spanId,
            surnameLabel,
            nameLabel,
            lastnameLabel,
        }
    }

    function closeButtonElement(btnClass) {
        const closeButton = document.createElement('button');
        closeButton.classList.add('btn-reset', btnClass);
        closeButton.setAttribute('type', 'button');
        closeButton.innerHTML = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2333 1.73333L15.2666 0.766664L8.49991 7.53336L1.73324 0.766696L0.766576 1.73336L7.53324 8.50003L0.766603 15.2667L1.73327 16.2333L8.49991 9.46669L15.2666 16.2334L16.2332 15.2667L9.46657 8.50003L16.2333 1.73333Z" fill="#B0B0B0"/>
        </svg>`;

        return closeButton;
    }

    function buttonElement(classButton) {
        const cancelButtonElement = document.createElement('button');
        cancelButtonElement.classList.add(...classButton);
        cancelButtonElement.setAttribute('type', 'button');

        return cancelButtonElement;
    }

    function clientDeleteForm() {
        const deleteClientDiv = document.createElement('div');
        deleteClientDiv.classList.add('delete-client', 'form');
        const deleteClientContainer = document.createElement('div');
        deleteClientContainer.classList.add('delete-client-container');
        const closeDeleteDiv = closeButtonElement('close-delete-button');
        const deleteTitleElement = document.createElement('h3');
        deleteTitleElement.classList.add('title', 'delete-title');
        deleteTitleElement.textContent = 'Kunden löschen';
        const confirmParagraphElement = document.createElement('p');
        confirmParagraphElement.classList.add('delete-text');
        confirmParagraphElement.textContent = 'Sind Sie sicher, dass Sie diesen Kunden löschen möchten??';
        const deleteClientElement = buttonElement(['btn-reset', 'button-primary']);
        deleteClientElement.id = 'delete-button';
        deleteClientElement.textContent = 'Löschen';
        const cancelDeleteClient = buttonElement(['btn-reset', 'cancel-button', 'cancel-delete-client']);
        cancelDeleteClient.textContent = 'Stornieren';

        deleteClientContainer.append(closeDeleteDiv, deleteTitleElement, confirmParagraphElement, deleteClientElement, cancelDeleteClient);
        deleteClientDiv.append(deleteClientContainer);

        return {
            deleteClientDiv,
            closeDeleteDiv,
            cancelDeleteClient,
            deleteClientElement,
        }
    }

    const deleteItem = clientDeleteForm();
    const {
        deleteClientDiv: deleteItemDiv,
        closeDeleteDiv: closeItemDeleteDiv,
        cancelDeleteClient: cancelItemDelete,
        deleteClientElement: deleteItemButton,
    } = deleteItem;

    const addFormElements = formClient();
    const {
        formElement: formAddElement,
        formTitleElement: addFormTitleElement,
        closeForm: closeAddForm,
        surnameInput: surnameAddInput,
        nameInput: nameAddInput,
        lastnameInput: lastnameAddInput,
        contactsWrapper,
        contactButtonElement: addContactButtonElement,
        saveButtonElement: saveAddButtonElement,
        cancelButton: cancelAddButton,
        spanId: spanID,
    } = addFormElements;

    const editFormElements = formClient();
    const {
        formElement: formEditElement,
        formTitleElement: editFormTitleElement,
        closeForm: closeEditForm,
        surnameInput: surnameEditInput,
        nameInput: nameEditInput,
        lastnameInput: lastnameEditInput,
        contactsWrapper: contactsEditWrapper,
        contactButtonElement: editContactButtonElement,
        saveButtonElement: saveEditButtonElement,
        cancelButton: cancelEditButton,
        spanId: spanEditID,
    } = editFormElements;


    function handleAddContact() {
        const newContact = createContactInput();
        contactsWrapper.prepend(newContact);
        count++;
        if (count === 10) {
            addContactButtonElement.remove();
        }
    }

    function handleEditContact() {
        const newContact = createContactInput();
        contactsEditWrapper.prepend(newContact);
        count++;
        if (count === 10) {
            editContactButtonElement.remove();
        }
    }

    async function openClientEditForm(client) {
        if (nameEditInput.classList.contains('invalid-fio')) nameEditInput.classList.remove('invalid-fio');
        if (surnameEditInput.classList.contains('invalid-fio')) surnameEditInput.classList.remove('invalid-fio');

        const sectionTable = document.getElementById('section-table');

        const clientBefore = await fetch(`http://localhost:3000/api/clients/${client.id}`);
        const dataClientBefore = await clientBefore.json();
        sectionTable.append(darkElement, formEditElement);
        if (document.querySelector('.error-server')) document.querySelector('.error-server').remove();
        darkElement.classList.add('dark-background');

        formEditElement.setAttribute('data-mode', 'edit');
        formEditElement.setAttribute('client-id', client.id);
        setTimeout(() => {
            formEditElement.classList.add('show');

        }, 0);

        // Очистка контейнера
        count = client.contacts.length;
        contactsEditWrapper.innerHTML = '';

        // Заполнение формы
        editFormTitleElement.textContent = 'Daten ändern';
        spanEditID.textContent = `ID: ${dataClientBefore.id}`;

        surnameEditInput.value = dataClientBefore.surname || '';
        surnameEditInput.id = 'changeSurname';
        nameEditInput.value = dataClientBefore.name || '';
        nameEditInput.id = 'changeName';
        lastnameEditInput.value = dataClientBefore.lastName || '';
        lastnameEditInput.id = 'changeLastname';

        // Создание контактов
        dataClientBefore.contacts.forEach(contact => {
            const contactElement = createContactInput(contact);
            contactsEditWrapper.prepend(contactElement);
        });

        cancelEditButton.textContent = 'Kunden löschen';

        // Добавление кнопки "Добавить контакт"
        if (count < 10) contactsEditWrapper.append(editContactButtonElement);

        editContactButtonElement.removeEventListener('click', handleEditContact);
        editContactButtonElement.addEventListener('click', handleEditContact);

        darkElement.addEventListener('click', closeClient);
        closeEditForm.addEventListener('click', closeClient);

        deleteItemDiv.setAttribute('ID-client', client.id);

        idDeleteClient = deleteItemDiv.getAttribute('ID-client');
        cancelEditButton.addEventListener('click', () => {
            closeClient();

            const sectionTable = document.getElementById('section-table');

            // Показываем подтверждающее окно
            sectionTable.append(darkElement, deleteItemDiv);
            darkElement.classList.add('dark-background');

            if (document.querySelector('.error-server')) document.querySelector('.error-server').remove();

            setTimeout(() => {
                deleteItemDiv.classList.add('show');
            }, 0);


            const cancelDeleteHandler = (e) => {
                e.preventDefault();

                darkElement.classList.remove('dark-background');
                darkElement.remove();
                deleteItemDiv.classList.remove('show');
                setTimeout(() => {
                    deleteItemDiv.remove();
                }, 500);

                closeItemDeleteDiv.removeEventListener('click', cancelDeleteHandler);
                cancelItemDelete.removeEventListener('click', cancelDeleteHandler);
            };

            closeItemDeleteDiv.addEventListener('click', cancelDeleteHandler);
            cancelItemDelete.addEventListener('click', cancelDeleteHandler);
        })



    }



    function filter(arr, prop, value) {
        let result = []
        let copy = [...arr];
        for (const item of copy) {
            if (String(item[prop]).includes(value) == true) result.push(item);
        }
        return result;
    }

    function generateHashPath(clientId) {
        return `#client-${clientId}`; 
    }

    async function findClientByHashPath() {
        const currentHash = window.location.hash; 
        const hashPattern = /#client-(\d+)/;
        const response = await fetch('http://localhost:3000/api/clients');
        const clients = await response.json();

        const match = currentHash.match(hashPattern); 
        if (match) {
            const hashedId = match[1]; 
            const client = clients.find(client => generateHashPath(client.id) === currentHash); 
            if (client) {
                openClientEditForm(client);
            } else {
                console.log('Client not found');
            }
        } else {
            console.log('No client hash path in URL');
        }
    }

    //функция отрисовки элементов таблицы
    function createClientItem(client) {
        const row = document.createElement('tr');
        const idElement = document.createElement('td');
        const fullnameElement = document.createElement('td');
        fullnameElement.id = 'fullnameTd';
        const addElement = document.createElement('td');
        const changeElement = document.createElement('td');
        changeElement.id = 'update';
        const contactsElement = document.createElement('td');
        contactsElement.id = 'contactTd';
        const contactsList = document.createElement('ul');
        contactsList.classList.add('list-reset', 'contact-list');
        contactsElement.append(contactsList);
        const buttonsWrapper = document.createElement('div');
        buttonsWrapper.classList.add('buttons-wrapper');

        const buttonsElement = document.createElement('td');
        const updateButton = document.createElement('button');
        updateButton.classList.add('btn-reset', 'table-button', 'update-button');
        updateButton.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7" clip-path="url(#clip0_121_2103)">
            <path d="M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z" fill="#9873FF"/></g><defs> <clipPath id="clip0_121_2103"><rect width="16" height="16" fill="white"/></clipPath></defs></svg> Ändern`;
        updateButton.setAttribute('client-data-id', client.id)
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn-reset', 'table-button', 'delete-button');
        deleteButton.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7" clip-path="url(#clip0_121_2128)">
            <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#F06A4D"/></g><defs><clipPath id="clip0_121_2128"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
            Löschen`;
        buttonsWrapper.append(updateButton, deleteButton)
        buttonsElement.append(buttonsWrapper);
        idElement.textContent = client.id;
        const fullname = `${client.surname} ${client.name} ${client.lastName}`;
        fullnameElement.textContent = fullname;
        client.fullname = fullname;
        let createdDate = new Date(client.createdAt);
        let yearCreated = createdDate.getFullYear();
        let monthCreated = (createdDate.getMonth() + 1).toString().padStart(2, '0');
        let dayCreated = createdDate.getDate().toString().padStart(2, '0');
        let hoursCreated = createdDate.getHours().toString().padStart(2, '0');
        let minutesCreated = createdDate.getMinutes().toString().padStart(2, '0');
        addElement.innerHTML = `${dayCreated}.${monthCreated}.${yearCreated} <span class ="span-date">${hoursCreated}:${minutesCreated}</span>`;
        let updatedDate = new Date(client.updatedAt);
        let yearUpdated = updatedDate.getFullYear();
        let monthUpdated = (updatedDate.getMonth() + 1).toString().padStart(2, '0');
        let dayUpdated = updatedDate.getDate().toString().padStart(2, '0');
        let hoursUpdated = updatedDate.getHours().toString().padStart(2, '0');
        let minutesUpdated = updatedDate.getMinutes().toString().padStart(2, '0');
        changeElement.innerHTML = `${dayUpdated}.${monthUpdated}.${yearUpdated} <span class ="span-date">${hoursUpdated}:${minutesUpdated}</span>`;


        if (client.contacts.length === 0) {
            contactsElement.textContent = 'Keine Kontakte';
        } else {
            const phoneContacts = client.contacts.filter(contact => contact.type === 'Телефон');
            const emailContacts = client.contacts.filter(contact => contact.type === 'Email');
            const facebookContacts = client.contacts.filter(contact => contact.type === 'Facebook');
            const vkContacts = client.contacts.filter(contact => contact.type === 'VK');
            const otherContacts = client.contacts.filter(contact => contact.type === 'Другое');
            phoneContacts.forEach(tel => {
                const contactsListItem = document.createElement('li');
                contactsListItem.classList.add('contact-item-tel');
                contactsListItem.setAttribute('data-id', client.id);
                const hoverDiv = document.createElement('div');
                hoverDiv.classList.add('hover-contact')
                const typeSpan = document.createElement('span');
                typeSpan.textContent = `${tel.value}`;
                hoverDiv.append(typeSpan);
                contactsListItem.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7">
                <circle cx="8" cy="8" r="8" />
                <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
                </g></svg>`;
                contactsListItem.append(hoverDiv);
                contactsList.append(contactsListItem);
            });
            emailContacts.forEach(email => {
                const contactsListItem = document.createElement('li');
                contactsListItem.classList.add('contact-item');
                contactsListItem.setAttribute('data-id', client.id);
                const hoverDiv = document.createElement('div');
                hoverDiv.classList.add('hover-contact')
                const typeSpan = document.createElement('span');
                typeSpan.textContent = `${email.value}`;
                hoverDiv.append(typeSpan);
                contactsListItem.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z"/>
                </svg>`;
                contactsListItem.append(hoverDiv);
                contactsList.append(contactsListItem);
            });
            facebookContacts.forEach(facebook => {
                const contactsListItem = document.createElement('li');
                contactsListItem.classList.add('contact-item');
                contactsListItem.setAttribute('data-id', client.id);
                const hoverDiv = document.createElement('div');
                hoverDiv.classList.add('hover-contact')
                const typeSpan = document.createElement('span');
                typeSpan.textContent = `${facebook.value}`;
                hoverDiv.append(typeSpan);
                contactsListItem.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z"/>
                </svg>`;
                contactsListItem.append(hoverDiv);
                contactsList.append(contactsListItem);
            });
            vkContacts.forEach(vk => {
                const contactsListItem = document.createElement('li');
                contactsListItem.classList.add('contact-item');
                contactsListItem.setAttribute('data-id', client.id);
                const hoverDiv = document.createElement('div');
                hoverDiv.classList.add('hover-contact')
                const typeSpan = document.createElement('span');
                typeSpan.textContent = `${vk.value}`;
                hoverDiv.append(typeSpan);
                contactsListItem.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" /></svg>`;
                contactsListItem.append(hoverDiv);
                contactsList.append(contactsListItem);
            });
            otherContacts.forEach(other => {
                const contactsListItem = document.createElement('li');
                contactsListItem.classList.add('contact-item');
                contactsListItem.setAttribute('data-id', client.id);
                const hoverDiv = document.createElement('div');
                hoverDiv.classList.add('hover-contact')
                const typeSpan = document.createElement('span');
                typeSpan.textContent = `${other.value}`;
                hoverDiv.append(typeSpan);
                contactsListItem.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.7" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z"/>
                </svg>`;
                contactsListItem.append(hoverDiv);
                contactsList.append(contactsListItem);
            });

        };

        row.append(idElement, fullnameElement, addElement, changeElement, contactsElement, buttonsElement);
        row.setAttribute('id-client', client.id)

        if (client.contacts.length > 5) {
            replaycer(client)
        }

        //кнопка удаления 

        deleteButton.addEventListener('click', () => {
            idDeleteClient = client.id;
            const sectionTable = document.getElementById('section-table');
            // Показываем подтверждающее окно
            sectionTable.append(darkElement, deleteItemDiv);
            darkElement.classList.add('dark-background');

            if (document.querySelector('.error-server')) document.querySelector('.error-server').remove();
            setTimeout(() => {
                deleteItemDiv.classList.add('show');
            }, 0);



            const cancelDeleteHandler = (e) => {
                e.preventDefault();

                darkElement.classList.remove('dark-background');
                darkElement.remove();
                deleteItemDiv.classList.remove('show');
                setTimeout(() => {
                    deleteItemDiv.remove();
                }, 500);

                closeItemDeleteDiv.removeEventListener('click', cancelDeleteHandler);
                cancelItemDelete.removeEventListener('click', cancelDeleteHandler);
            };

            closeItemDeleteDiv.addEventListener('click', cancelDeleteHandler);
            cancelItemDelete.addEventListener('click', cancelDeleteHandler);
        });


        client.hashPath = generateHashPath(client.id);

        updateButton.addEventListener('click', (e) => {
            e.preventDefault();
            openClientEditForm(client)
        });

        const clientLink = document.createElement('a');
        clientLink.href = `#client-${client.id}`;
        clientLink.textContent = `${client.id}`;
        idElement.innerHTML = '';
        idElement.appendChild(clientLink);

        return row;
    }

    function createCustomSelect(selectedType) {
        const contactsCustomSelect = document.createElement('div');
        contactsCustomSelect.classList.add('contact-select');

        const contactsCustomSpan = document.createElement('span');
        contactsCustomSpan.classList.add('select-trigger', 'arrow-down');
        contactsCustomSpan.textContent = selectedType || 'Kontakttyp';

        const contactsListSelect = document.createElement('ul');
        contactsListSelect.classList.add('select-options');

        const options = [
            { label: 'Telefonnumer', value: 'tel', svg: 1 },
            { label: 'Email', value: 'email', svg: 2 },
            { label: 'Facebook', value: 'text', svg: 3 },
            { label: 'VK', value: 'text', svg: 4 },
            { label: 'Andere', value: 'text', svg: 5 },
        ];

        options.forEach(option => {
            const optionElement = document.createElement('li');
            optionElement.dataset.value = option.value;
            optionElement.textContent = option.label;
            optionElement.setAttribute('svg-id', option.svg);
            optionElement.classList.add('contact-option');
            contactsListSelect.append(optionElement);
        });

        contactsCustomSelect.append(contactsCustomSpan, contactsListSelect);
        return { contactsCustomSelect, contactsCustomSpan, contactsListSelect };
    }

    function createContactInput(contact = { type: '', value: '' }) {
        const contactInputsWrapper = document.createElement('div');
        contactInputsWrapper.id = 'contact';
        contactInputsWrapper.classList.add('contacts-inputs-wrapper');

        const { contactsCustomSelect, contactsCustomSpan, contactsListSelect } = createCustomSelect(contact.type);

        const dynamicInput = document.createElement('input');
        dynamicInput.classList.add('contact-input');
        dynamicInput.type = contact.type === 'Телефон' ? 'tel' : 'text';
        dynamicInput.value = contact.value || '';
        dynamicInput.id = 'contact-input';
        dynamicInput.disabled = true;
        dynamicInput.required = true;
        if (contact.type === 'Телефон') {
            dynamicInput.setAttribute('svg-id', '1');
            dynamicInput.disabled = false;
        }
        if (contact.type === 'Email') {
            dynamicInput.setAttribute('svg-id', '2');
            dynamicInput.disabled = false;
        }
        if (contact.type === 'Facebook') {
            dynamicInput.setAttribute('svg-id', '3');
            dynamicInput.disabled = false;
        }
        if (contact.type === 'VK') {
            dynamicInput.setAttribute('svg-id', '4');
            dynamicInput.disabled = false;
        }
        if (contact.type === 'Другое') {
            dynamicInput.setAttribute('svg-id', '5');
            dynamicInput.disabled = false;
        }

        const deleteContactButton = document.createElement('button');
        deleteContactButton.setAttribute('type', 'button');
        deleteContactButton.classList.add('btn-reset', 'delete-contact');
        deleteContactButton.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" />
        </svg>`;

    
        contactsCustomSelect.addEventListener('click', (e) => {
            e.preventDefault();
            contactsListSelect.classList.toggle('show');
            contactsCustomSpan.classList.toggle('arrow-down');
            contactsCustomSpan.classList.toggle('arrow-up');
        });

        contactsListSelect.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedOption = e.target.closest('li');
            if (selectedOption) {
                let svgId = selectedOption.getAttribute('svg-id');
                contactsCustomSpan.textContent = selectedOption.textContent;
                dynamicInput.type = selectedOption.dataset.value;
                dynamicInput.placeholder = `Geben Sie ${selectedOption.textContent.toLowerCase()} ein`;
                dynamicInput.value = '';
                dynamicInput.setAttribute('svg-id', svgId);
                dynamicInput.disabled = false;
                dynamicInput.required = true;
                if (dynamicInput.classList.contains('invalid')) {
                    dynamicInput.classList.remove('invalid');
                    let errorTelElement = contactInputsWrapper.querySelector('.error-input-tel');
                    errorTelElement.remove();
                }
            }
        });

        // Валидация ввода
        dynamicInput.addEventListener('input', (e) => {
            validateInput(dynamicInput, contactInputsWrapper);
        });
        // Удаление контакта
        deleteContactButton.addEventListener('click', () => {
            contactInputsWrapper.remove();
            if (count === 10) {
                contactsWrapper.append(addContactButtonElement);
            }
            count--;
        });

        const hoverDiv = document.createElement('div');
        hoverDiv.classList.add('hover-contact')
        const typeSpan = document.createElement('span');
        typeSpan.textContent = `Kunden löschen`;
        hoverDiv.append(typeSpan);
        deleteContactButton.append(hoverDiv);

        contactInputsWrapper.append(contactsCustomSelect, dynamicInput, deleteContactButton);
        return contactInputsWrapper;
    }

    function validateInput(inputElement, wrapperElement) {
        const errorClass = 'error-input-tel';
        let errorSpan = wrapperElement.querySelector(`.${errorClass}`);
        const value = inputElement.value.trim();

        if (!value) {
            inputElement.classList.add('invalid');
            errorSpan = document.createElement('span');
            errorSpan.classList.add(errorClass);
            errorSpan.textContent = 'Füllen Sie das Feld unbedingt aus';
            inputElement.before(errorSpan);
        }

        if (inputElement.type === 'tel') {
            const regex = /^\+([1-9]\d{0,2})\s?\d{4,14}$/;

            if (regex.test(value)) {
                console.log('Die Telefonnummer ist gültig');
                if (errorSpan) errorSpan.remove();
                inputElement.classList.remove('invalid');
                inputElement.classList.add('valid');
            } else {
                console.log('Die Telefonnummer ist ungültig');
                inputElement.classList.remove('valid');
                inputElement.classList.add('invalid');
                if (!errorSpan) {
                    errorSpan = document.createElement('span');
                    errorSpan.classList.add(errorClass);
                    errorSpan.textContent = 'Geben Sie die Telefonnummer in Zahlen und ohne Leerzeichen ein';
                    inputElement.before(errorSpan);
                }
            }
        }
    }

    function closeClient() {

        let formElement = document.querySelector('.form')

        darkElement.classList.remove('dark-background');
        darkElement.remove();
        formElement.classList.remove('show');
        setTimeout(() => {
            formElement.remove();
        }, 500);
    }

    function validateTextInput(inputElement) {
        const classInvalidFio = 'invalid-fio';

        if (inputElement.classList.contains(classInvalidFio)) inputElement.classList.remove(classInvalidFio);
        const regex = /^[a-zA-Zа-яА-ЯёЁ-]+$/;
        const value = inputElement.value.trim();

        if (!regex.test(value)) {
            inputElement.classList.add(classInvalidFio);
            inputElement.placeholder = 'Der Name enthält ungültige Zeichen';
            inputElement.value = '';
            return;
        } else {
            inputElement.classList.remove(classInvalidFio);
        }
    }

    function changeClient(client) {
        const changedClient = document.querySelector(`[id-client="${client.id}"]`);
        const changedName = changedClient.querySelector('#fullnameTd');
        changedName.textContent = `${client.surname} ${client.name} ${client.lastName}`;
        const chandeDate = changedClient.querySelector('#update');

        let updatedDate = new Date(client.updatedAt);
        let yearUpdated = updatedDate.getFullYear();
        let monthUpdated = (updatedDate.getMonth() + 1).toString().padStart(2, '0');
        let dayUpdated = updatedDate.getDate().toString().padStart(2, '0');
        let hoursUpdated = updatedDate.getHours().toString().padStart(2, '0');
        let minutesUpdated = updatedDate.getMinutes().toString().padStart(2, '0');
        chandeDate.innerHTML = `${dayUpdated}.${monthUpdated}.${yearUpdated} <span class ="span-date">${hoursUpdated}:${minutesUpdated}</span>`;

        const contactChange = changedClient.querySelector('#contactTd');

        const contactsList = document.createElement('ul')
        contactsList.classList.add('list-reset', 'contact-list');
        contactChange.innerHTML = '';
        if (client.contacts.length === 0) {
            contactChange.textContent = 'Keine Kontakte';
        } else {
            const phoneContacts = client.contacts.filter(contact => contact.type === 'Телефон');
            const emailContacts = client.contacts.filter(contact => contact.type === 'Email');
            const facebookContacts = client.contacts.filter(contact => contact.type === 'Facebook');
            const vkContacts = client.contacts.filter(contact => contact.type === 'VK');
            const otherContacts = client.contacts.filter(contact => contact.type === 'Другое');
            phoneContacts.forEach(tel => {
                const contactsListItem = document.createElement('li');
                contactsListItem.classList.add('contact-item-tel');
                contactsListItem.setAttribute('data-id', client.id);
                const hoverDiv = document.createElement('div');
                hoverDiv.classList.add('hover-contact')
                const typeSpan = document.createElement('span');
                typeSpan.textContent = `${tel.value}`;
                hoverDiv.append(typeSpan);
                contactsListItem.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7">
                <circle cx="8" cy="8" r="8" />
                <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
                </g></svg>`;
                contactsListItem.append(hoverDiv);
                contactsList.append(contactsListItem);
            });
            emailContacts.forEach(email => {
                const contactsListItem = document.createElement('li');
                contactsListItem.classList.add('contact-item');
                contactsListItem.setAttribute('data-id', client.id);
                const hoverDiv = document.createElement('div');
                hoverDiv.classList.add('hover-contact')
                const typeSpan = document.createElement('span');
                typeSpan.textContent = `${email.value}`;
                hoverDiv.append(typeSpan);
                contactsListItem.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z"/>
                </svg>`;
                contactsListItem.append(hoverDiv);
                contactsList.append(contactsListItem);
            });
            facebookContacts.forEach(facebook => {
                const contactsListItem = document.createElement('li');
                contactsListItem.classList.add('contact-item');
                contactsListItem.setAttribute('data-id', client.id);
                const hoverDiv = document.createElement('div');
                hoverDiv.classList.add('hover-contact')
                const typeSpan = document.createElement('span');
                typeSpan.textContent = `${facebook.value}`;
                hoverDiv.append(typeSpan);
                contactsListItem.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z"/>
                </svg>`;
                contactsListItem.append(hoverDiv);
                contactsList.append(contactsListItem);
            });
            vkContacts.forEach(vk => {
                const contactsListItem = document.createElement('li');
                contactsListItem.classList.add('contact-item');
                contactsListItem.setAttribute('data-id', client.id);
                const hoverDiv = document.createElement('div');
                hoverDiv.classList.add('hover-contact')
                const typeSpan = document.createElement('span');
                typeSpan.textContent = `${vk.value}`;
                hoverDiv.append(typeSpan);
                contactsListItem.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" /></svg>`;
                contactsListItem.append(hoverDiv);
                contactsList.append(contactsListItem);
            });
            otherContacts.forEach(other => {
                const contactsListItem = document.createElement('li');
                contactsListItem.classList.add('contact-item');
                contactsListItem.setAttribute('data-id', client.id);
                const hoverDiv = document.createElement('div');
                hoverDiv.classList.add('hover-contact')
                const typeSpan = document.createElement('span');
                typeSpan.textContent = `${other.value}`;
                hoverDiv.append(typeSpan);
                contactsListItem.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.7" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z"/>
                </svg>`;
                contactsListItem.append(hoverDiv);
                contactsList.append(contactsListItem);
            });
        };
        contactChange.append(contactsList);

        if (client.contacts.length > 5) {
            replaycer(client);
        }
    }

    function replaycer(client) {
        setTimeout(() => {
            const replaycer = document.createElement('div');
            replaycer.classList.add('replaycer');
            const replaycerCount = document.createElement('span');
            replaycer.append(replaycerCount);
            const contactsListElements = document.querySelectorAll(`[data-id="${client.id}"]`);
            replaycerCount.textContent = `+${client.contacts.length - 4}`;
            contactsListElements[4].replaceWith(replaycer);
            Array.from(contactsListElements).slice(5).forEach(listElement => {
                listElement.style.display = 'none';
            });
            replaycer.addEventListener('click', () => {
                replaycer.replaceWith(contactsListElements[4]);
                Array.from(contactsListElements).slice(5).forEach(listElement => {
                    listElement.style.display = 'inline-block';
                });
            })
        }, 0);
    }

    async function renderTable() {
        // поиск элемента в таблице, куда добавлять строку
        const tbodyElement = document.getElementById('tbody');
        const tableWrapper = document.getElementById('table-container');
        const tableContainer = document.querySelector('.tabelle .container')
        const loader = document.getElementById('loader');
        const sectionTable = document.getElementById('section-table');
        //выгрузка данных с сервера
        const response = await fetch('http://localhost:3000/api/clients');
        const dataList = await response.json();

        //проверка на пустой массив в базе данных
        if (Array.isArray(dataList) && dataList.length === 0) {
            tbodyElement.innerHTML = '';
            tableWrapper.append(emptyElement);
        } else {
            dataList.forEach((client) => {
                const row = createClientItem(client);
                tbodyElement.append(row);
            });
        }

        //удаление загрузки
        loader.remove();

        //добавление кнопки добавления клиента
        tableContainer.append(addButtonElement);

        addButtonElement.addEventListener('click', (e) => {
            e.preventDefault();

            if (nameAddInput.classList.contains('invalid-fio')) nameAddInput.classList.remove('invalid-fio');
            if (surnameAddInput.classList.contains('invalid-fio')) surnameAddInput.classList.remove('invalid-fio');


            formAddElement.setAttribute('data-mode', 'add');

            addFormTitleElement.textContent = 'Neuer Kunde';
            surnameAddInput.value = '';
            nameAddInput.value = '';
            lastnameAddInput.value = '';
            contactsWrapper.innerHTML = ''; // Очищаем контакты
            contactsWrapper.append(addContactButtonElement); // Добавляем кнопку "Добавить контакт"
            cancelAddButton.textContent = 'Stornieren';
            spanID.style.display = 'none';

            // Закрытие формы

            darkElement.classList.add('dark-background');

            surnameAddInput.placeholder = 'Nachname*';
            nameAddInput.placeholder = 'Name*';
            surnameAddInput.value = '';
            nameAddInput.value = '';
            lastnameAddInput.value = '';
            // formAddElement.innerHTML = '';

            contactsWrapper.style.paddingBottom = '8px';
            contactsWrapper.innerHTML = '';

            contactsWrapper.append(addContactButtonElement);

            count = 0; //счетчик контактов
            sectionTable.append(darkElement, formAddElement);
            darkElement.classList.add('dark-background');
            if (document.querySelector('.error-server')) document.querySelector('.error-server').remove();

            setTimeout(() => {
                formAddElement.classList.add('show');
            }, 0);

            darkElement.addEventListener('click', closeClient)
            closeAddForm.addEventListener('click', closeClient); 
            cancelAddButton.addEventListener('click', closeClient); 

            addContactButtonElement.removeEventListener('click', handleAddContact);
            addContactButtonElement.addEventListener('click', handleAddContact);

        });

        addContactButtonElement.addEventListener('click', handleAddContact);

        formAddElement.addEventListener('submit', async (e) => {
            e.preventDefault();
            e.stopPropagation();

            validateTextInput(nameAddInput);
            validateTextInput(surnameAddInput);

            if (document.contains(emptyElement)) emptyElement.remove();

            let newClient = {};
            const contactList = document.querySelectorAll('#contact-input');

            //создание нового клиента
            newClient = {
                name: String(nameAddInput.value.trim().split(' ').join('')[0].toUpperCase() + nameAddInput.value.trim().split(' ').join('').slice(1).toLowerCase()),
                surname: String(surnameAddInput.value.trim().split(' ').join('')[0].toUpperCase() + surnameAddInput.value.trim().split(' ').join('').slice(1).toLowerCase()),
            };

            if (contactList.length !== 0) {
                console.log(contactList);
                newClient.contacts = [];
                contactList.forEach(contact => {
                    if (contact.getAttribute('svg-id') === '1') {
                        newClient.contacts.push({ type: 'Телефон', value: contact.value });
                    };
                    if (contact.getAttribute('svg-id') === '2') {
                        newClient.contacts.push({ type: 'Email', value: contact.value });
                    };
                    if (contact.getAttribute('svg-id') === '3') {
                        newClient.contacts.push({ type: 'Facebook', value: contact.value });
                    };
                    if (contact.getAttribute('svg-id') === '4') {
                        newClient.contacts.push({ type: 'VK', value: contact.value });
                    };
                    if (contact.getAttribute('svg-id') === '5') {
                        newClient.contacts.push({ type: 'Другое', value: contact.value });
                    };

                    const wrapper = contact.closest('.contacts-inputs-wrapper'); // Ищем враппер для каждого инпута
                    validateInput(contact, wrapper);
                })
            }

            if (document.querySelector('.invalid') || document.querySelector('.invalid-fio')) return;

            if (lastnameAddInput.value.trim()) newClient.lastName = String(lastnameAddInput.value.trim().split(' ').join('')[0].toUpperCase() + lastnameAddInput.value.trim().split(' ').join('').slice(1).toLowerCase());

            try {
                // Отправляем запрос на сервер
                const response = await fetch('http://localhost:3000/api/clients', {
                    method: 'POST',
                    body: JSON.stringify(newClient),
                    headers: { 'Content-Type': 'application/json' },
                });

                if (!response.ok) {
                    const errorServerSpan = document.createElement('span');
                    errorServerSpan.classList.add('error-server')
                    const errorData = await response.json().catch(() => null);

                    if (errorData && errorData.message) {
                        errorServerSpan.textContent = errorData.message;
                        if (!document.querySelector('.error-server')) saveAddButtonElement.before(errorServerSpan);
                    } else {
                        errorServerSpan.textContent = 'Etwas ist schief gelaufen...'
                        if (!document.querySelector('.error-server')) saveAddButtonElement.before(errorServerSpan);
                    }

                    return;
                }

                const newServerClient = await response.json();
                const row = createClientItem(newServerClient);
                tbodyElement.append(row);
                surnameAddInput.value = '';
                nameAddInput.value = '';
                lastnameAddInput.value = '';
                formAddElement.remove();
                darkElement.classList.remove('dark-background');
                darkElement.remove();

            } catch (error) {
                const errorServerSpan = document.createElement('span');
                errorServerSpan.classList.add('error-server');
                errorServerSpan.textContent = 'Etwas ist schief gelaufen...'
                if (!document.querySelector('.error-server')) saveAddButtonElement.before(errorServerSpan);
            }
        })

        formEditElement.addEventListener('submit', async (e) => {
            e.preventDefault();
            validateTextInput(nameEditInput);
            validateTextInput(surnameEditInput);

            if (document.contains(emptyElement)) emptyElement.remove();

            let newClient = {};
            let clientId = formEditElement.getAttribute('client-id');

            newClient = {
                name: String(nameEditInput.value.trim().split(' ').join('')[0].toUpperCase() + nameEditInput.value.trim().split(' ').join('').slice(1).toLowerCase()),
                surname: String(surnameEditInput.value.trim().split(' ').join('')[0].toUpperCase() + surnameEditInput.value.trim().split(' ').join('').slice(1).toLowerCase()),
                contacts: [],
            };
            const contactList = document.querySelectorAll('#contact-input');
            if (contactList.length !== 0) {
                contactList.forEach(contact => {
                    if (contact.getAttribute('svg-id') === '1') {
                        newClient.contacts.push({ type: 'Телефон', value: contact.value });
                    };
                    if (contact.getAttribute('svg-id') === '2') {
                        newClient.contacts.push({ type: 'Email', value: contact.value });
                    };
                    if (contact.getAttribute('svg-id') === '3') {
                        newClient.contacts.push({ type: 'Facebook', value: contact.value });
                    };
                    if (contact.getAttribute('svg-id') === '4') {
                        newClient.contacts.push({ type: 'VK', value: contact.value });
                    };
                    if (contact.getAttribute('svg-id') === '5') {
                        newClient.contacts.push({ type: 'Другое', value: contact.value });
                    };
                    const wrapper = contact.closest('.contacts-inputs-wrapper'); // Ищем враппер для каждого инпута
                    validateInput(contact, wrapper);
                })
            }

            if (document.querySelector('.invalid')) return;

            if (contactList.length === 0) newClient.contacts = [];

            if (lastnameEditInput.value.trim()) newClient.lastName = String(lastnameEditInput.value.trim().split(' ').join('')[0].toUpperCase() + lastnameEditInput.value.trim().split(' ').join('').slice(1).toLowerCase());
            if (!lastnameEditInput.value.trim()) newClient.lastName = '';

            try {
                const response = await fetch(`http://localhost:3000/api/clients/${clientId}`, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        surname: newClient.surname,
                        name: newClient.name,
                        lastName: newClient.lastName,
                        contacts: newClient.contacts,
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })

                if (!response.ok) {
                    const errorServerSpan = document.createElement('span');
                    errorServerSpan.classList.add('error-server');
                    const errorData = await response.json().catch(() => null);

                    if (errorData && errorData.message) {
                        errorServerSpan.textContent = errorData.message;
                        if (!document.querySelector('.error-server')) saveEditButtonElement.before(errorServerSpan);
                    } else {
                        errorServerSpan.textContent = 'Etwas ist schief gelaufen...'
                        if (!document.querySelector('.error-server')) saveEditButtonElement.before(errorServerSpan);
                    }

                    return; 
                }

                const newServerClient = await response.json();
                changeClient(newServerClient);
                surnameEditInput.value = '';
                nameEditInput.value = '';
                lastnameEditInput.value = '';
                formEditElement.remove();
                darkElement.classList.remove('dark-background');
                darkElement.remove();
            } catch (error) {
                const errorServerSpan = document.createElement('span');
                errorServerSpan.classList.add('error-server');
                errorServerSpan.textContent = 'Etwas ist schief gelaufen...'
                if (!document.querySelector('.error-server')) saveEditButtonElement.before(errorServerSpan);
            }

        })

        const search = document.getElementById('search-input');
        let debounceTimer;
        let activeIndex = -1; 
        let listItems = []; 

        search.addEventListener('input', async () => {

            const response = await fetch('http://localhost:3000/api/clients');
            const clients = await response.json();

            newArr = [...clients];
            newArr.forEach(item => {
                const fullname = `${item.surname} ${item.name} ${item.lastName}`;
                item.fullname = fullname.toLowerCase();
            })

            const findList = document.createElement('ul');
            findList.classList.add('list-reset', 'find-list');
            const listWrapper = document.querySelector('.header-form');

            clearTimeout(debounceTimer);

            debounceTimer = setTimeout(() => {
                const existingList = listWrapper.querySelector('.find-list');
                if (existingList) {
                    existingList.remove();
                }

                findList.innerHTML = '';
                const searchText = search.value.toLowerCase().trim();
                const filteredClients = filter(newArr, 'fullname', searchText);
                if (filteredClients.length > 0) {
                    filteredClients.forEach(client => {
                        const findItem = document.createElement('li');
                        findItem.classList.add('find-list-item');
                        findItem.textContent = client.fullname;
                        findList.append(findItem);

                        findItem.setAttribute('data-client-id', client.id);

                        findItem.addEventListener('click', () => {
                            console.log('нажал')
                            const clientRow = document.querySelector(`[id-client="${client.id}"]`);
                            if (clientRow) {
                                clientRow.scrollIntoView({ behavior: 'smooth', block: 'center' });

                                clientRow.classList.add('highlight');

                                setTimeout(() => {
                                    clientRow.classList.remove('highlight');
                                }, 2000);
                            }
                        });
                    });
                    listWrapper.append(findList);
                    listItems = findList.querySelectorAll('.find-list-item');
                    activeIndex = -1;
                }

                if (!searchText || filteredClients.length === 0) {
                    findList.innerHTML = '';
                }
            }, 300);
        })

        search.addEventListener('keydown', (e) => {
            if (!listItems.length) return;

            listItems.forEach(item => item.classList.remove('active')); 

            if (e.key === 'ArrowDown') {
                activeIndex = (activeIndex + 1) % listItems.length; 
            } else if (e.key === 'ArrowUp') {
                activeIndex = (activeIndex - 1 + listItems.length) % listItems.length; 
            } else if (e.key === 'Enter' && activeIndex >= 0) {
                const selectedItem = listItems[activeIndex];
                selectedItem.classList.add('active'); 

                const clientId = selectedItem.getAttribute('data-client-id'); 
                const clientRow = document.querySelector(`[id-client="${clientId}"]`);

                if (clientRow) {
                    clientRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    clientRow.classList.add('highlight');

                    setTimeout(() => {
                        clientRow.classList.remove('highlight');
                    }, 2000);
                }

                const existingList = document.querySelector('.find-list');
                if (existingList) existingList.remove(); 
                listItems = [];
                return;
            }

            if (activeIndex >= 0) {
                listItems[activeIndex].classList.add('active'); 
            }
        });

        sort()

        deleteItemButton.addEventListener('click', async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/clients/${idDeleteClient}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    const errorServerSpan = document.createElement('span');
                    errorServerSpan.classList.add('error-server');
                    const errorData = await response.json().catch(() => null);

                    if (errorData && errorData.message) {
                        errorServerSpan.textContent = errorData.message;
                        if (!document.querySelector('.error-server')) deleteItemButton.before(errorServerSpan);
                    } else {
                        errorServerSpan.textContent = 'Etwas ist schief gelaufen...'
                        if (!document.querySelector('.error-server')) deleteItemButton.before(errorServerSpan);
                    }

                    return; 
                }
                document.querySelector(`[id-client="${idDeleteClient}"]`).remove();
                darkElement.classList.remove('dark-background');
                darkElement.remove();
                deleteItemDiv.classList.remove('show');
                setTimeout(() => {
                    deleteItemDiv.remove();
                }, 500);


            } catch (error) {
                const errorServerSpan = document.createElement('span');
                errorServerSpan.classList.add('error-server');
                errorServerSpan.textContent = 'Etwas ist schief gelaufen...'
                if (!document.querySelector('.error-server')) deleteItemButton.before(errorServerSpan);
            }



        });
    }

    async function sort() {
        const fullnameTh = document.getElementById('fullname');
        const idTh = document.getElementById('ID');
        const dateTh = document.getElementById('date');
        const lastUpdateTh = document.getElementById('last-update');
        let reverse = false;

        idTh.classList.add('alphabeth-sort');
        fullnameTh.classList.add('alphabeth-sort');
        dateTh.classList.add('alphabeth-sort');
        lastUpdateTh.classList.add('alphabeth-sort');

        idTh.innerHTML = `ID <span class="alphabeth-sort"><svg width="12" height="12" viewBox="0 0 12 12"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2 6L2.705 6.705L5.5 3.915L5.5 10L6.5 10L6.5 3.915L9.29 6.71L10 6L6 2L2 6Z"
            fill="#9873FF" />
          </svg></span>`;

        const response = await fetch('http://localhost:3000/api/clients');
        const serverList = await response.json();
        let arr = [...serverList];

        const sortAndRender = async (sortFunction) => {
            const response = await fetch('http://localhost:3000/api/clients');
            const serverList = await response.json();
            arr = [...serverList];
            arr.sort(sortFunction);
            const tbodyElement = document.getElementById('tbody');
            tbodyElement.innerHTML = '';
            arr.forEach(client => {
                const row = createClientItem(client);
                tbodyElement.append(row);
            });
            reverse = !reverse;
        };

        sortAndRender((a, b) => reverse ? Number(b.id) - Number(a.id) : Number(a.id) - Number(b.id));

        //id sort
        idTh.addEventListener('click', () => {
            idTh.classList.toggle('alphabeth-sort');
            if (idTh.classList.contains('alphabeth-sort')) {
                idTh.innerHTML = `ID <span class="alphabeth-sort"><svg width="12" height="12" viewBox="0 0 12 12"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 6L2.705 6.705L5.5 3.915L5.5 10L6.5 10L6.5 3.915L9.29 6.71L10 6L6 2L2 6Z"
                                            fill="#9873FF" />
                                    </svg></span>`;
            } else {
                idTh.innerHTML = `ID <span class="no-alphabeth-sort"><svg width="12" height="12"
                                        viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_121_2331)">
                                            <path
                                                d="M10 6L9.295 5.295L6.5 8.085L6.5 2H5.5L5.5 8.085L2.71 5.29L2 6L6 10L10 6Z"
                                                fill="#9873FF" />
                                        </g>
                                        <defs>
                                            <rect width="12" height="12" fill="white" />
                                        </defs>
                                    </svg></span>`;
            }
            sortAndRender((a, b) => reverse ? Number(b.id) - Number(a.id) : Number(a.id) - Number(b.id));
        })

        fullnameTh.innerHTML = `Name <span class="alphabeth-sort"><svg width="12" height="12" viewBox="0 0 12 12"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2 6L2.705 6.705L5.5 3.915L5.5 10L6.5 10L6.5 3.915L9.29 6.71L10 6L6 2L2 6Z"
            fill="#9873FF" />
         </svg></span> А-Я`;

        fullnameTh.addEventListener('click', () => {
            fullnameTh.classList.toggle('alphabeth-sort');
            if (fullnameTh.classList.contains('alphabeth-sort')) {
                fullnameTh.innerHTML = `Name <span class="alphabeth-sort"><svg width="12" height="12" viewBox="0 0 12 12"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 6L2.705 6.705L5.5 3.915L5.5 10L6.5 10L6.5 3.915L9.29 6.71L10 6L6 2L2 6Z"
                                            fill="#9873FF" />
                                    </svg></span> А-Z`;
            } else {
                fullnameTh.innerHTML = `Name <span class="no-alphabeth-sort"><svg width="12" height="12"
                                        viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_121_2331)">
                                            <path
                                                d="M10 6L9.295 5.295L6.5 8.085L6.5 2H5.5L5.5 8.085L2.71 5.29L2 6L6 10L10 6Z"
                                                fill="#9873FF" />
                                        </g>
                                        <defs>
                                            <rect width="12" height="12" fill="white" />
                                        </defs>
                                    </svg></span> Z-А`;
            }

            sortAndRender((a, b) => reverse
                ? b.surname.toLowerCase().localeCompare(a.surname.toLowerCase())
                : a.surname.toLowerCase().localeCompare(b.surname.toLowerCase()),);
        })

        dateTh.innerHTML = `Erstellungsdatum und -uhrzeit <span class="alphabeth-sort"><svg width="12" height="12" viewBox="0 0 12 12"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2 6L2.705 6.705L5.5 3.915L5.5 10L6.5 10L6.5 3.915L9.29 6.71L10 6L6 2L2 6Z"
            fill="#9873FF" />
        </svg></span>`;

        dateTh.addEventListener('click', () => {
            dateTh.classList.toggle('alphabeth-sort');
            if (dateTh.classList.contains('alphabeth-sort')) {
                dateTh.innerHTML = `Erstellungsdatum und -uhrzeit <span class="alphabeth-sort"><svg width="12" height="12" viewBox="0 0 12 12"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 6L2.705 6.705L5.5 3.915L5.5 10L6.5 10L6.5 3.915L9.29 6.71L10 6L6 2L2 6Z"
                                            fill="#9873FF" />
                                    </svg></span>`;
            } else {
                dateTh.innerHTML = `Erstellungsdatum und -uhrzeit <span class="no-alphabeth-sort"><svg width="12" height="12"
                                        viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_121_2331)">
                                            <path
                                                d="M10 6L9.295 5.295L6.5 8.085L6.5 2H5.5L5.5 8.085L2.71 5.29L2 6L6 10L10 6Z"
                                                fill="#9873FF" />
                                        </g>
                                        <defs>
                                            <rect width="12" height="12" fill="white" />
                                        </defs>
                                    </svg></span>`;
            }

            sortAndRender((a, b) => reverse ? (new Date(b.createdAt)) - (new Date(a.createdAt)) : (new Date(a.createdAt)) - (new Date(b.createdAt)));
        })

        lastUpdateTh.innerHTML = `Letzte Änderungen <span class="alphabeth-sort"><svg width="12" height="12" viewBox="0 0 12 12"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 6L2.705 6.705L5.5 3.915L5.5 10L6.5 10L6.5 3.915L9.29 6.71L10 6L6 2L2 6Z"
                                            fill="#9873FF" />
                                    </svg></span>`;

        lastUpdateTh.addEventListener('click', () => {
            lastUpdateTh.classList.toggle('alphabeth-sort');
            if (lastUpdateTh.classList.contains('alphabeth-sort')) {
                lastUpdateTh.innerHTML = `Letzte Änderungen <span class="alphabeth-sort"><svg width="12" height="12" viewBox="0 0 12 12"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 6L2.705 6.705L5.5 3.915L5.5 10L6.5 10L6.5 3.915L9.29 6.71L10 6L6 2L2 6Z"
                                            fill="#9873FF" />
                                    </svg></span>`;
            } else {
                lastUpdateTh.innerHTML = `Letzte Änderungen <span class="no-alphabeth-sort"><svg width="12" height="12"
                                        viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_121_2331)">
                                            <path
                                                d="M10 6L9.295 5.295L6.5 8.085L6.5 2H5.5L5.5 8.085L2.71 5.29L2 6L6 10L10 6Z"
                                                fill="#9873FF" />
                                        </g>
                                        <defs>
                                            <rect width="12" height="12" fill="white" />
                                        </defs>
                                    </svg></span>`;
            }

            sortAndRender((a, b) => reverse ? (new Date(b.updatedAt)) - (new Date(a.updatedAt)) : (new Date(a.updatedAt)) - (new Date(b.updatedAt)));
        })

    }

    document.addEventListener('DOMContentLoaded', () => {
        renderTable()
        window.addEventListener('load', findClientByHashPath);
        window.addEventListener('hashchange', findClientByHashPath);
    })



})()

