-- Autores

INSERT INTO authors (name, email, bio)
VALUES
(
'Brian Tracy',
'brian@miniblog.com',
'Autor y conferencista sobre productividad, liderazgo y éxito personal.'
),
(
'James Clear',
'james@miniblog.com',
'Autor de Hábitos Atómicos y divulgador de estrategias de mejora continua.'
),
(
'Jacobo Grinberg',
'jacobo@miniblog.com',
'Investigador mexicano reconocido por la Teoría Sintérgica y estudios sobre conciencia.'
);

-- Posts

INSERT INTO posts (title, content, author_id, published)
VALUES
(
'El poder de la autodisciplina',
'La autodisciplina es una habilidad clave para alcanzar metas personales y profesionales.',
1,
true
),
(
'Metas claras y éxito personal',
'Definir objetivos concretos permite enfocar mejor los esfuerzos y aumentar las probabilidades de éxito.',
1,
true
),
(
'Habitos atomicos y mejora continua',
'Pequeños cambios sostenidos en el tiempo pueden generar grandes resultados.',
2,
true
),
(
'Sistemas vs objetivos',
'Los sistemas bien diseñados producen resultados consistentes más allá de las metas puntuales.',
2,
true
),
(
'La teoria sintergica',
'Propuesta de Jacobo Grinberg sobre la relación entre conciencia y realidad.',
3,
true
),
(
'Potencial transferido y conciencia',
'Exploración de fenómenos relacionados con la interacción de la mente y la percepción.',
3,
true
);
