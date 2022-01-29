$(function () {
    var scntDiv = $('#dynamicDiv');

    $(document).on('click', '#addInput', function () {
        $(`<div class="row adsakdj" id="linha">

        <!--DYNAMIC REMOVE-->
        <div id="dynamicDiv">
            <div class="mt-4 ml-2 mr-2">
                <p>
                <a class="btn btn-danger" href="javascript:void(0)" id="remInput" onclick="acao()">
                    <span class="glyphicon glyphicon-minus" aria-hidden="true"></span>
                    X
                </a>
                </p>
            </div>
        </div>



        <div class="col-md-2 mb-3">
            <label for="country">Categoria</label>
            <select class="custom-select d-block w-100" id="categoria" required>
                <option value="">Escolha...</option>
                <option>Pedágio</option>
                <option>Hospedagem</option>
                <option>Combustível</option>
                <option>Alimentação</option>
                <option>Outra</option>
            </select>
        </div>

        <div class="form-group col-md-4">
            <label for="descricao">Descrição</label>
            <input type="text" class="form-control" id="descricao" required>
        </div>


        <div class="form-class col-md-2">
            <label for="vlr_unitario">Vlr. Unitário</label>
            <div class="input-group">
                <input type="text" min="0.00" step="0.05" value="" id="vlr_unitario" name="vlr_unitario"
                    class="form-control" placeholder="R$" required>
            </div>
        </div>

        <div class="form-group col-md-1">
            <label for="qtdade">Qtd</label>
            <input type="text" class="form-control" id="qtdade" name="qtdade" onblur="teste()" required>
        </div>


        <div class="form-class col-md-2">
            <label for="valorTotal">Vlr. Total</label>
            <div class="input-group">
                <input type="text" value="" id="valorTotal" name="valorTotal" class="form-control"
                    placeholder="R$" readonly onblur="calcular()">
            </div>
        </div>

    </div>`).appendTo(scntDiv);
        return false;
    });


    $(document).on('click', '#remInput', function () {
        $(this).parents('#linha').remove();
        return false;
    });



});

/*CALCULOS*/
function teste() {
    $('.adsakdj').each(function () {
        var qtd = $(this).find('input[name=qtdade]').val();
        var vlrUni = $(this).find('input[name=vlr_unitario]').val();

        var x = parseFloat(vlrUni) * parseFloat(qtd);

        if (isNaN(x)) {
            $(this).find('input[name=valorTotal]').val(' ');
        } else {
            x = x.toFixed(2)
            $(this).find('input[name=valorTotal]').val(x);
        }
    });
    calcularTotal()

}


function calcularTotal() {
    var totalG = 0

    $("input[id^=valorTotal]").each(function (index, value) {
        console.log(value);
        totalG += parseFloat($(value).val());
    })
    $("#totalGeral").val(totalG);
}


function valida() {
    var tudoOk = true;

    $("input, select").each(function (index, value) {
        console.log(value);
        if ($(value).val() == '') {
            tudoOk = false;
        }
    })
    if (tudoOk) {
        alert("Solicitação enviada com sucesso!");
    } else {
        alert('Por Favor preencha todos os campos!');
    }
}