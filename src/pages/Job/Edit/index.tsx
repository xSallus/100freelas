<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#41414C" />
    <link rel="shortcut icon" href="images/favicon.png" type="image/png" />
    <title>100Freelas - JobsCalc</title>

    <link rel="stylesheet" href="/styles/main.css" />
    <link rel="stylesheet" href="/styles/partials/page-header.css" />
    <link rel="stylesheet" href="/styles/partials/cards.css" />
    <link rel="stylesheet" href="/styles/partials/buttons.css" />
    <link rel="stylesheet" href="/styles/partials/forms.css" />
    <link rel="stylesheet" href="/styles/partials/modal.css" />
    <link rel="stylesheet" href="/styles/partials/animations.css" />
    <link rel="stylesheet" href="/styles/pages/job.css" />

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <script type="module" src="./scripts/job-edit.js"></script>
    
  </head>
  <body id="page-job-edit">
    <%- include('parts/page-header', {title: 'Editar Job'}) %>

    <div class="container flex animate-up delay-2">
        <form 
            id="form-job"
            action="/job/<%= job.id %>"
            method="POST" >
          <fieldset>
            <legend>Dados do Job</legend>
            <div class="separator light"></div>

            <div class="input-wrapper">
              <label for="name">Nome do Job</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value="<%= job.name %> "
              />
            </div>

            <div class="input-group">
              <div class="input-wrapper">
                <label for="daily-hours">Quantas horas <br/>
                  por dia vai dedicar ao job?</label>
                <input 
                  type="number"
                  step="0.1" 
                  id="daily-hours" 
                  name="daily-hours"
                  value="<%= job.dailyHours %>"/>
              </div>

              <div class="input-wrapper">
                <label for="total-hours">Estimativa de <br/>
                  horas para esse Job?</label>
                <input 
                  type="number"
                  id="total-hours" 
                  name="total-hours"
                  value="<%= job.totalHours %>" />
              </div>
            </div>
          </fieldset>
    
        </form>
      </main>
      <aside class="card">
        <img src="/images/money-color.svg" alt="Imagem de Dinheiro">
        <p>
          O valor do projeto ficou em <strong>R$ <%= job.budget.toFixed(2).replace('.',',') %></strong>
        </p>
        <div class="button-group">
          <button 
            class="button green" 
            form="form-job" 
            type="submit" 
            title="Salvar Dados">Salvar</button>
          <a 
            href="#" 
            class="button gray open-modal"
            >
            <img 
              src="/images/trash-24.svg" 
              alt="Cancelar cadastro" 
              title="Cancelar cadastro">
          </a>
        </div>
      </aside>
      
    </div>
    <!-- end container -->

    <div class="modal-wrapper">
      <div class="modal">
        <img src="/images/trash-48.svg" alt="Excluir Job" title="Excluir Job" />
        <h3>Excluir Job</h3>
        <p>Quer mesmo excluir esse job? <br/>
        Ele será apagado para sempre.  
        </p>
        <footer>
          <a 
            class="button gray" 
            href="#">Cancelar</a>
          <button
            class="button red"
            type="submit"
            form="delete-job">Excluir Job</button>
        </footer>
      </div>
      <form 
        method="POST" 
        action="/job/delete/<%= job.id %>" 
        id="delete-job"></form>
    </div>
    <!-- end modal-wrapper -->
  </body>
</html>
 