export interface Book {
    id:number, 
    title:string, 
    status:Status
}

export type Status =  'to-read' | 'in-progress' | 'complete'