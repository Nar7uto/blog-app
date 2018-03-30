import RequestService from './Api';
import OfflineData from './Data';

const url = 'https://api.jsonbin.io/b/5abd1ae87afa326cc27952f3';

class GetBlogsService{
    getBlogs() {
        return RequestService.getRequest(url);
    }
}

export default new GetBlogsService();

