import { writeFile } from 'fs/promises'
import {NextResponse } from 'next/server'

export async function POST(req) {
  const data = await req.formData()
  const file= data.get('file')
  const sid = data.get('sid');

  if (!file) {
    return NextResponse.json({ "message":"no image found",success: false })
  }

  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const path = `./public/${sid + "_" + file.name}`
  await writeFile(path, buffer)
  console.log(path);
  return NextResponse.json({"message":"file uploaded","uploadedFilePath": path, success: true })
}