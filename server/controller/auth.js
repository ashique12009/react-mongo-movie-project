import bcryptjs from 'bcryptjs';

const hashPassword = async (password) => {
    const hashedPassword = await bcryptjs.hash(password, 7);
    return hashedPassword;
}

export default hashPassword;