export class Dispositivos {
    id: number
    conexion: string = '0'
    estado: string='desconectado'
    ip: number = 0
    mac: string
    tipo: string
}
export class Dispositivo {
    id: number
    conexion: string 
    estado: string='conectado'
    ip: number = 0
    mac: string
    tipo: string
}