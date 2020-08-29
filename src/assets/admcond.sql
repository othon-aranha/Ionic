--
-- File generated with SQLiteStudio v3.2.1 on sáb ago 22 20:34:53 2020
--
-- Text encoding used: UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: Unidade
CREATE TABLE Unidade (
    id              INTEGER       PRIMARY KEY ON CONFLICT ABORT AUTOINCREMENT,
    nr_ap           INTEGER       UNIQUE ON CONFLICT FAIL,
    nm_proprietario VARCHAR (120) NOT NULL,
    locado          BOOLEAN       NOT NULL,
    nm_locador      VARCHAR (120) 
);


-- Table: Local_Locacao
CREATE TABLE Local (
    id               INTEGER        PRIMARY KEY ASC ON CONFLICT FAIL AUTOINCREMENT
                                    NOT NULL ON CONFLICT FAIL,
    ds_local VARCHAR (60)   NOT NULL ON CONFLICT FAIL,
    gera_custo       BOOLEAN        NOT NULL
                                    DEFAULT S,
    vlr_locacao      NUMERIC (4, 2) 
);

-- Table: Locacao
CREATE TABLE Locacao (
    id                INTEGER  PRIMARY KEY ASC ON CONFLICT FAIL AUTOINCREMENT
                               NOT NULL,
    unidade_locataria INTEGER  CONSTRAINT FK_LOCACAO_UNIDADE REFERENCES Unidade (id) 
                               NOT NULL,
    local             INTEGER  CONSTRAINT FK_LOCACAO_LOCAL REFERENCES Local (id) 
                               NOT NULL ON CONFLICT FAIL,
    dt_locacao        DATETIME NOT NULL,
    hora_ini          TIME,
    hora_fim          TIME,
    dt_solicitacao    DATETIME NOT NULL
);


-- Table: Reserva
CREATE TABLE Reserva (
    id              INTEGER  PRIMARY KEY ASC ON CONFLICT FAIL AUTOINCREMENT,
    unidade_reserva INTEGER  CONSTRAINT FK_RESERVA_UNIDADE REFERENCES Unidade (id) 
                             NOT NULL ON CONFLICT FAIL,
    local_reserva   INTEGER  CONSTRAINT FK_RESERVA_LOCAL REFERENCES Local (id) 
                             NOT NULL,
    dt_reserva      DATETIME NOT NULL,
    hr_ini_reserva  TIME,
    hr_fim_reserva  TIME,
    dt_solicitacao  DATETIME NOT NULL
);



INSERT INTO Unidade (id, nr_ap, nm_proprietario, locado, nm_locador) VALUES (1, 101, 'Fulano', 'false', NULL);
INSERT INTO Unidade (id, nr_ap, nm_proprietario, locado, nm_locador) VALUES (2, 102, 'Beltrano', 'false', NULL);
INSERT INTO Unidade (id, nr_ap, nm_proprietario, locado, nm_locador) VALUES (3, 103, 'Sicrano', 'true', 'João de tal');
INSERT INTO Unidade (id, nr_ap, nm_proprietario, locado, nm_locador) VALUES (4, 104, 'Sicrano', 'true', 'João de tal');

INSERT INTO Unidade (id, nr_ap, nm_proprietario, locado, nm_locador) VALUES (5, 201, 'Fulano', 'false', NULL);
INSERT INTO Unidade (id, nr_ap, nm_proprietario, locado, nm_locador) VALUES (6, 202, 'Beltrano', 'false', NULL);
INSERT INTO Unidade (id, nr_ap, nm_proprietario, locado, nm_locador) VALUES (7, 203, 'Sicrano', 'true', 'João de tal');
INSERT INTO Unidade (id, nr_ap, nm_proprietario, locado, nm_locador) VALUES (8, 204, 'Sicrano', 'true', 'João de tal');

INSERT INTO Unidade (id, nr_ap, nm_proprietario, locado, nm_locador) VALUES (9, 301, 'Fulano', 'false', NULL);
INSERT INTO Unidade (id, nr_ap, nm_proprietario, locado, nm_locador) VALUES (10, 302, 'Beltrano', 'false', NULL);
INSERT INTO Unidade (id, nr_ap, nm_proprietario, locado, nm_locador) VALUES (11, 303, 'Sicrano', 'true', 'João de tal');
INSERT INTO Unidade (id, nr_ap, nm_proprietario, locado, nm_locador) VALUES (12, 304, 'Sicrano', 'true', 'João de tal');

INSERT INTO Local_Locacao (id, ds_local_locacao, gera_custo, vlr_locacao)  VALUES(1, 'Churrasqueira', 'true', 35.00);
INSERT INTO Local_Locacao (id, ds_local_locacao, gera_custo, vlr_locacao)  VALUES(2, 'Salão de festas', 'true', 45.00);
INSERT INTO Local_Locacao (id, ds_local_locacao, gera_custo,  vlr_locacao) VALUES(3, 'Salão de festas e churrasqueira', 'true', 80.00);


INSERT INTO Locacao(id, unidade_locataria, local, dt_locacao, hora_ini, hora_fim) VALUES(1, 1, 1, )


COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
