
const http = require('node:http');

let clients = [
  {
    id: 1,
    tipo_documento: 'CC',
    numero_documento: '1000000001',
    nombre: 'Juan Pérez',
    telefono: '+57 300 1234567',
    email: 'juan.perez@example.com',
    is_active: true,
    created_at: '2026-09-16T20:54:16.000Z',
    updated_at: '2026-09-16T20:54:16.000Z',
  },
  {
    id: 2,
    tipo_documento: 'CC',
    numero_documento: '1000000002',
    nombre: 'María García',
    telefono: '+57 310 9876543',
    email: 'maria.garcia@example.com',
    is_active: true,
    created_at: '2026-09-16T20:54:16.000Z',
    updated_at: '2026-09-16T20:54:16.000Z',
  },
  {
    id: 9,
    tipo_documento: 'CC',
    numero_documento: '1098765438',
    nombre: 'Cliente Swagger Prueba',
    telefono: '3015551234',
    email: 'swagger.prueba@example.com',
    is_active: true,
    created_at: '2026-10-14T16:10:34.000Z',
    updated_at: '2026-10-14T16:10:34.000Z',
  },
];

let pets = [
  { id: 1, nombre: 'Max', descripcion: 'Perro de compañía', isActive: true },
  { id: 2, nombre: 'Luna', descripcion: 'Gata doméstica', isActive: true },
  { id: 3, nombre: 'Rocky', descripcion: 'Perro de compañía', isActive: true },
  { id: 4, nombre: 'Rocky', descripcion: 'Perro de compañía', isActive: true },
];

let nextClientId = 10;
let nextPetId = 5;

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204).end();
    return;
  }

  const send = (status, data) => {
    res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(data));
  };

  let body = {};
  try {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    if (chunks.length) body = JSON.parse(Buffer.concat(chunks).toString());
  } catch {
    send(400, { error: 'JSON inválido' });
    return;
  }

  const url = new URL(req.url, 'http://localhost');
  const parts = url.pathname.split('/').filter(Boolean);

  if (parts[0] !== 'api' || !['clientes', 'mascotas'].includes(parts[1])) {
    send(404, { error: 'Ruta no encontrada' });
    return;
  }

  const resource = parts[1];
  const isClients = resource === 'clientes';
  const rows = isClients ? clients : pets;
  const key = isClients ? 'client' : 'pet';
  const listKey = isClients ? 'clients' : 'pets';
  const id = parts[2] ? Number(parts[2]) : null;
  const index = id === null ? -1 : rows.findIndex((item) => item.id === id);
  const now = new Date().toISOString();

  if (req.method === 'GET' && id === null) {
    send(200, { [listKey]: rows });
    return;
  }

  if (req.method === 'GET' && id !== null) {
    if (index < 0) return send(404, { error: 'Registro no encontrado' });
    send(200, { [key]: rows[index] });
    return;
  }

  if (req.method === 'POST' && id === null) {
    const item = {
      ...body,
      id: isClients ? nextClientId++ : nextPetId++,
      ...(isClients
        ? { is_active: body.is_active ?? true, created_at: now, updated_at: now }
        : { isActive: body.isActive ?? true, createdAt: now, updatedAt: now }),
    };
    rows.push(item);
    send(201, { [key]: item });
    return;
  }

  if (index < 0) {
    send(404, { error: 'Registro no encontrado' });
    return;
  }

  if (req.method === 'PATCH' && parts[3] === 'deactivate') {
    if (isClients) rows[index].is_active = false;
    else rows[index].isActive = false;
    send(200, { message: 'Registro desactivado', [key]: rows[index] });
    return;
  }

  if (req.method === 'PATCH' || req.method === 'PUT') {
    rows[index] = {
      ...rows[index],
      ...body,
      ...(isClients ? { updated_at: now } : { updatedAt: now }),
    };
    send(200, { [key]: rows[index] });
    return;
  }

  if (req.method === 'DELETE') {
    rows.splice(index, 1);
    send(200, { message: 'Registro eliminado', id });
    return;
  }

  send(405, { error: 'Método no permitido' });
});

server.listen(4001, () => {
  console.log('HuellaMarket Stub API: http://localhost:4001/api');
});
