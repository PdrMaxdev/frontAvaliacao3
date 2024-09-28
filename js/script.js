function showSection(section) {
    const mainContent = document.getElementById('main-content');
    
    switch(section) {
        case 'cadastrarEquipamento':
            mainContent.innerHTML = `
                <h2>Cadastrar Equipamento</h2>
                <form id="equipamentoForm">
                    <div class="form-group">
                        <label for="descricao">Descrição</label>
                        <input type="text" class="form-control" id="descricao" required>
                    </div>
                    <div class="form-group">
                        <label for="usuarioId">ID do Usuário</label>
                        <input type="number" class="form-control" id="usuarioId" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Cadastrar</button>
                </form>
            `;
            break;
        case 'editarEquipamento':
            mainContent.innerHTML = `
                <h2>Editar Equipamento</h2>
                <form id="editarEquipamentoForm">
                    <div class="form-group">
                        <label for="equipamentoId">ID do Equipamento</label>
                        <input type="number" class="form-control" id="equipamentoId" required>
                    </div>
                    <div class="form-group">
                        <label for="novaDescricao">Nova Descrição</label>
                        <input type="text" class="form-control" id="novaDescricao" required>
                    </div>
                    <div class="form-group">
                        <label for="novaSituacao">Nova Situação</label>
                        <input type="text" class="form-control" id="novaSituacao" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Atualizar</button>
                </form>
            `;
            break;
        case 'cadastrarColaborador':
            mainContent.innerHTML = `
                <h2>Cadastrar Colaborador</h2>
                <form id="colaboradorForm">
                    <div class="form-group">
                        <label for="nome">Nome do Colaborador</label>
                        <input type="text" class="form-control" id="nome" required>
                    </div>
                    <button type="button" id="btn-cadastrar-colaborador" onClick=">Cadastrar</button>
                </form>
            `;
            break;
        case 'relatorios':
            mainContent.innerHTML = `
                <h2>Relatórios de Colaboradores</h2>
                <p>Aqui você pode gerar relatórios dos colaboradores.</p>
            `;
            break;
        case 'editarColaborador':
            mainContent.innerHTML = `
                <h2>Editar Colaborador</h2>
                <form id="editarColaboradorForm">
                    <div class="form-group">
                        <label for="colaboradorId">ID do Colaborador</label>
                        <input type="number" class="form-control" id="colaboradorId" required>
                    </div>
                    <div class="form-group">
                        <label for="novoNome">Novo Nome</label>
                        <input type="text" class="form-control" id="novoNome" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Atualizar</button>
                </form>
            `;
            break;
        case 'registrarAcao':
            mainContent.innerHTML = `
                <h2>Registrar Ação</h2>
                <p>Formulário para registrar ações relacionadas ao EPI.</p>
            `;
            break;
        case 'relatoriosEPI':
            mainContent.innerHTML = `
                <h2>Relatórios de EPI</h2>
                <p>Aqui você pode gerar relatórios dos EPIs.</p>
            `;
            break;
        default:
            mainContent.innerHTML = `<h2>Bem-vindo ao Sistema de Cadastro</h2>`;
            break;
    }
}
