import bcryptjs from 'bcryptjs';

export const hashPassword = async (password) => {
    const hashedPassword = await bcryptjs.hash(password, 7);
    return hashedPassword;
}

export const isMatch = async (password, hashedPassword) => {
    const match = await bcryptjs.compare(password, hashedPassword);
    return match;
}