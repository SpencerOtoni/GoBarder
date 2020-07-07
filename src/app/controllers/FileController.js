import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.File;

    const file = await File.create({
      name,
      path,
    });
  }
}

export default new FileController();
