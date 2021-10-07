import  {mapStateToProps, mapDispatchProps} from '../../src_code/container/Container';

describe("PokemonList container", () => {
    it("mapStateToProps", () => {
        const initialState = {
            event : {
                result : 1,
                error : null,
            }
        };
        expect(mapStateToProps(initialState).result).toEqual(1);
    })

    it("mapStateToProps to be null", () => {
        const initialState = {
            event : {
                result : 1,
                error : null,
            }
        };
        expect(mapStateToProps(initialState).error).toEqual(null);
    })

    it(" mapDispatchToProps", () => {
        const dispatch = jest.fn();
        mapDispatchProps(dispatch).getAbilities();
        expect(dispatch.mock.calls[0][0]).toBeCalled;
    });
})