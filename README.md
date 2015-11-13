# bootstrap-dynamic-tabs
Plugin jQuery para manipular tabs do bootstrap de forma dinâmica, excelente para aplicações multitelas na WEB ou em runtimes como node-webkit ou electron

<h3><a href="http://jayralencar.com.br/bootstrap-dynamic-tabs/" target="_blank">DEMO</a></h3>

<h1>Dependencias</h1>
Para que o plugin funcione melhor é necessário o uso da biblioteca <a href="http://jquery.com/" target="_blank">jQuery</a>, do <a href="http://jqueryui.com/" target="_blank">jQuery UI</a> e do <a href="https://fortawesome.github.io/Font-Awesome/icons/" target="_blank">Font Awesome</a>. Este último pode ser dispensado se você não pretende usar ícones.
E a dependencia mais importante obviamente é o <a href="//getbootstrap.com" target="_blank">Bootstrap</a>

<h1>Usando</h1>
Para usar o plugin basta incluir as depencias citadas acima no seu documento HTML e incluir também os arquivos <code>bootstrap-dynamic-tabs.js</code> e <code>bootstrap-dynamic-tabs.css</code>. bootstrap-dynamic-tabs é escrito como um plugin jQuery, então a form de usar será a mesma.
<pre>
<code>
  var tabs = $('#tabs').bootstrapDynamicTabs();
</code>
</pre>

<h3>Adicionando tabs</h3>
Para adicionar uma nova aba basta usar o metodo <code>addTab(options)</code>, veja o exemplo:
<pre>
  <code>
  var tabs = $('#tabs').bootstrapDynamicTabs();
  tabs.addTab({
    title: "Home",
    text: "Seja bem-vindo",
    icon: 'fa fa-home',
    closable: false
  });
  </code>
</pre>

<h4><i>Options</i> (Opções)</h4>
As opções das abas são usadas para definir atributos como título, corpo, etc. Veja abaixo a lista dos atributos.
<table>
  <thead>
    <tr>
      <th>Atributo</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>Título da aba</td>
    </tr>
    <tr>
      <td>id</td>
      <td>String</td>
      <td>Este será o id do elemento DOM da aba, caso não seja informado será usado o titulo sem acentos e espaços e em lowercase</td>
    </tr>
    <tr>
      <td>text</td>
      <td>String</td>
      <td>Texto plano (sem HTML) que será mostrado no corpo da aba.</td>
    </tr>
    <tr>
      <td>html</td>
      <td>String (código HTML)</td>
      <td>Texto em HTML que será interpretado e mostrado no corpo da aba</td>
    </tr>
    <tr>
      <td>ajaxUrl</td>
      <td>String</td>
      <td>Url para realização do ajax. O retorno do ajax será mostrado no corpo da aba</td>
    </tr>
    <tr>
      <td>loadScripts</td>
      <td>String ou array</td>
      <td>Neste parametro você pode informa o endereço de arquivos JavaScript para serem incluidos na página. Você pode informar 1 ou vários, sendo que acima de 1 eles devem estar em um JavaScript Array. Quando a aba que chamou os script for fechada eles serão removidos.</td>
    </tr>
    <tr>
      <td>loadStyles</td>
      <td>String ou array</td>
      <td>Neste parametro você pode informa o endereço de arquivos de folha de estilo (.css) para serem incluidos na página. Você pode informar 1 ou vários, sendo que acima de 1 eles devem estar em um JavaScript Array. Quando a aba que chamou os estilos for fechada eles serão removidos.</td>
    </tr>
    <tr>
      <td>closable</td>
      <td>boolean</td>
      <td>Neste atributo você pode informar se a aba criada pode ser fechada ou não. <strong>Default true</strong></td>
    </tr>
    <tr>
      <td>icon</td>
      <td>string</td>
      <td>Neste parametro você pode passar a clase de um icone <a href="https://fortawesome.github.io/Font-Awesome/icons/" target="_blank">Font Awesome</a>, exemplo: 'fa fa-user'. O icone será mostrado na aba. Você também pode usar os glyphicon do Bootstrap </td>
    </tr>
  </tbody>
</table>
<h1>Sortable</h1>
Além de tudo, você ainda pode mudar a posição das abas ao arrastar, por isso usamos jQuery UI.

<h1>Métodos</h1>
<h5>closeById(tabid)</h5>
Além do addTab, bootstrap-dynamic-tabs possuí o método <code>closeById(tabid)</code>, que como o nome sugere serve para remover uma aba pelo id dela. Usando:
<pre>
  <code>
  var tabs = $('#tabs').bootstrapDynamicTabs();
  tabs.addTab({
    text: "Close by id",
    id: "test"
  });
  
  tabs.closeById('teste');
  </code>
</pre>

<h5>closeThis()</h5>
Para fechar a aba <strong>ativa</strong>, basta chamar este método dentro da aba no script.
<pre>
  <code>
  var tabs = $('#tabs').bootstrapDynamicTabs();
  tabs.closeThis();
  </code>
</pre>

<h1>Quer mais</h1>
Visite:
<a href="//jayralencar.com.br">Meu site</a></br>
<a href="//clubedosgeeks.com.br">Clube dos Geeks</a>
