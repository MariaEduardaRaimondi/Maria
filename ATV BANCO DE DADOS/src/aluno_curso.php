<?php

include_once 'db.php';

class aluno_curso {

    private $conn;

    function __construct($conn)
    {
        $this->conn = $conn;
    }

    function getAll() {
        $sql = "SELECT 
          codigo, 
          codigo_aluno,
          data_cadastro,
          data_fim,
          data_inicio,
           DATE_FORMAT(data_cadastro, '%d/%m/%Y %H:%i:%s') data_cadastro
        FROM aluno_curso";
        $result = $this->conn->query($sql);

        $data = [];
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        }

        return $data;
    }

    function getById($codigo) {
        $sql = "SELECT 
             codigo, 
          codigo_aluno,
           data_cadastro,
          data_fim,
          data_inicio,
            DATE_FORMAT(data_cadastro, '%Y-%m-%d') data_cadastro
        FROM aluno_curso
        WHERE codigo = ?";
        $stm = $this->conn->prepare($sql);

        $stm->bind_param('i', $codigo);
        $stm->execute();

        $result = $stm->get_result();

        $data = [];
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
        }

        return $data;
    }

    function deleteById($codigo) {
        $sql = "DELETE FROM aluno_curso WHERE codigo = ?";
        $stm = $this->conn->prepare($sql);

        $stm->bind_param('i', $codigo);
        $stm->execute();

        if (!$stm->error) {
            return ['status' => 'ok', 'msg' => 'Registro excluído com sucesso'];
        }

        return ['status' => 'error', 'msg' => 'Falha ao excluir registro'];
    }

    function updateById($codigo, $data) {
        $sql = "UPDATE aluno_curso SET 
          codigo = ?,
          codigo_aluno = ?,
          codigo_materia = ?,
           data_cadastro = ?,
          data_fim = ?,
          data_inicio = ?,
        WHERE codigo = ?";

        $stm = $this->conn->prepare($sql);

        $stm->bind_param(
            'sssi', 
            $data['codigo'], 
            $data['codigo_aluno'], 
            $data['codigo_materia'], 
            $data['data_cadstro'],
            $data['data_fim'], 
            $data['data_inicio'], 
            $codigo
        );
        $stm->execute();

        if (!$stm->error) {
            return ['status' => 'ok', 'msg' => 'Registro atualizado com sucesso'];
        }

        return ['status' => 'error', 'msg' => 'Falha ao atualizar registro'];
    }

    function create($data) {
        $sql = "INSERT INTO aluno_curso (codigo_alu data_cadastro, data_fim, data_inicio) VALUES (?, ?, ?)";

        $stm = $this->conn->prepare($sql);

        $stm->bind_param(
            'sss', 
            $data['codigo'], 
            $data['codigo_aluno'], 
            $data['codigo_materia'], 
            $data['data_cadstro'],
            $data['data_fim'], 
            $data['data_inicio'], 
        );
        $stm->execute();

        if (!$stm->error) {
            return ['status' => 'ok', 'msg' => 'Registro criado com sucesso'];
        }

        return ['status' => 'error', 'msg' => 'Falha ao criar registro'];
    }
}

$allowed_methods = [
    'GET',
    'POST',
    'PUT',
    'DELETE'
];

if (!in_array($_SERVER['REQUEST_METHOD'], $allowed_methods)) {
    http_response_code(400);
    header('Content-Type: application/json');
    echo json_encode( [
        'status' => 'error',
        'msg' => 'Invalid Request'
    ] );
}

$aluno_curso = new aluno_curso($conn);

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    echo json_encode($aluno_curso->deleteById($_GET['codigo']));
    return;
}

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode($aluno_curso->updateById($_GET['codigo'], $data));
    return;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    echo json_encode($aluno_curso->create($data));
    return;
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_SERVER['HTTP_REFERER']) && strpos($_SERVER['HTTP_REFERER'], 'aluno_curso/cadastro')) {
        echo json_encode($aluno_curso->getById($_GET['codigo']));
        return;
    }

    echo json_encode($aluno_curso->getAll());
    return;
}