import { CrudDocument } from 'wacom';

export interface Healthdoctor extends CrudDocument {
	name: string;
	description: string;
}